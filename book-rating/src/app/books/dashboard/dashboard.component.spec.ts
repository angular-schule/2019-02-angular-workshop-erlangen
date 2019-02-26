import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-book',
  template: ':-)'
})
export class TestBookComponent {
  @Input() book: Book;
  @Input() maxRating: number;
  @Input() minRating: number;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;

  beforeEach(async(() => {

    book = {
      isbn: '000',
      title: 'Test',
      description: 'Test',
      rating: 3
    };

    const bookRatingMock = {
      rateUp: () => book,
      rateDown: () => book,
      maxRating: 5,
      minRating: 1
    };

    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        TestBookComponent
      ],
      providers: [
        {
          provide: BookRatingService,
          useValue: bookRatingMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('doRateUp should forward the execution to BookRatingService.rateUp', () => {
    const rs = TestBed.get(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    component.doRateUp(book);
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });

  it('doRateUp should call updateList', () => {
    spyOn(component, 'updateList');
    component.doRateUp(book);

    expect(component.updateList).toHaveBeenCalled();
  });

  it('should update the list', () => {
    component.updateList(book);

    const foundBook = component.books.find(b => b.isbn === book.isbn);

    expect(foundBook).toBeTruthy();
    expect(foundBook).toEqual(book);
  });
});

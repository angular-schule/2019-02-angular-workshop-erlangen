import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { LoadBooks } from '../actions/book.actions';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(
    public rs: BookRatingService,
    private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);

  }

  updateList(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    // this.books = [...this.books, book];
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) {

  }

  ngOnInit() {
    this.books =  [
      {
        isbn: '000',
        title: 'Angular',
        description: 'super Buch',
        rating: 5
      }, {
        isbn: '111',
        title: 'AngularJS',
        description: 'tolles Buch',
        rating: 3
      }, {
        isbn: '222',
        title: 'React',
        description: 'machen wir nicht',
        rating: 2
      }];
  }
}

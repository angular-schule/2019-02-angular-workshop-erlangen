import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, tap, reduce, scan } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';


@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('isbn')),
        map(isbn => this.bs.getSingle(isbn))
      )
      .subscribe(x => x
        .subscribe(book => this.book = book));

  }

}

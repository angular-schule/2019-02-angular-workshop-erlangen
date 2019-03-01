import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, tap, reduce, scan, mergeMap, concatMap, switchMap, exhaustMap, catchError, share } from 'rxjs/operators';
import { of, from, Observable, EMPTY } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';
import { State } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { LoadBook } from '../actions/book.actions';
import { getBookByIsbn, getBooksLoading } from '../selectors/book.selectors';
import { getAllBooks } from '../selectors/book.selectors';



@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;
  loading$ = this.store.pipe(select(getBooksLoading));

  constructor(private route: ActivatedRoute,
    private store: Store<State>) { }

  ngOnInit() {

    const getIsbn$ = this.route.paramMap
      .pipe(
        map(params => params.get('isbn'))
      );

    getIsbn$.pipe(
        map(isbn => new LoadBook({ isbn }))
      ).subscribe(this.store);

    this.book$ = getIsbn$
      .pipe(
        switchMap(isbn => this.store.pipe(
          select(getBookByIsbn, {isbn}))),
      );
  }
}

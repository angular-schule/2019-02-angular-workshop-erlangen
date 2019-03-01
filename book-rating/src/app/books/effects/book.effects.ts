import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BookActions } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';



@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    concatMap(() => this.bs.getAll()),
    map(books => new LoadBooksSuccess({ books }))
  );


  constructor(
    private actions$: Actions<BookActions>,
    private bs: BookStoreService) {}
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BookActions } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';



@Injectable()
export class BookEffects {

  /*
  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    concatMap(() => EMPTY.pipe(
      map(data => new LoadBooksSuccess({ data })),
      catchError(error => of(new LoadBooksFailure({ error }))))
    )
  */

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() => this.bs.getAll().pipe(
      map(books => new LoadBooksSuccess({ books })),
      catchError(error => of(new LoadBooksFailure({ error })))
    ))
  );


  constructor(
    private actions$: Actions<BookActions>,
    private bs: BookStoreService) {}
}

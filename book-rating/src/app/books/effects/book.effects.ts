import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes, BookActions } from '../actions/book.actions';



@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        // map(data => new LoadBooksSuccess({ data })),
        catchError(error => of(new LoadBooksFailure({ error }))))
    )
  );


  constructor(private actions$: Actions<BookActions>) {}

}

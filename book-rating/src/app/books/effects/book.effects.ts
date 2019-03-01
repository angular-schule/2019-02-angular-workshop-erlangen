import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadBooksFailure, LoadBooksSuccess, BookActionTypes,
  BookActions, LoadBookSuccess, LoadBookFailure, LoadBooks } from '../actions/book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { ConfigActionTypes } from 'src/app/actions/config.actions';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';



@Injectable()
export class BookEffects {

  @Effect()
  reloadBooksOnConfigChange = this.actions$.pipe(
    ofType(ConfigActionTypes.ChangeConfig),
    map(() => new LoadBooks())
  );

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    withLatestFrom(this.store),
    map(([, state]) => state.config.config.isAdmin),
    switchMap(isAdmin => this.bs.getAll().pipe(
      map(books => new LoadBooksSuccess({ books })),
      catchError(error => of(new LoadBooksFailure({ error })))
    ))
  );

  // TODO: LoadBook --> LoadBookSuccess ODER LoadBookFailure
  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBook),
    switchMap(({ payload }) => this.bs.getSingle(payload.isbn).pipe(
      map(book => new LoadBookSuccess({ book })),
      catchError(error => of(new LoadBookFailure({ error })))
    ))
  );

  constructor(
    private actions$: Actions<BookActions>,
    private bs: BookStoreService,
    private store: Store<State>) {}
}

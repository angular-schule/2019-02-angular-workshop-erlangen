import { Action } from '@ngrx/store';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

export enum BookActionTypes {
  LoadBooks =        '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books Success',
  LoadBooksFailure = '[Book] Load Books Failure',

  LoadBook =         '[Book] Load Book',
  LoadBookSuccess =  '[Book] Load Book Success',
  LoadBookFailure =  '[Book] Load Book Failure',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: { books: Book[] }) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BookActionTypes.LoadBooksFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

// ----

export class LoadBook implements Action {
  readonly type = BookActionTypes.LoadBook;
  constructor(public payload: { isbn: string }) { }
}

export class LoadBookSuccess implements Action {
  readonly type = BookActionTypes.LoadBookSuccess;
  constructor(public payload: { book: Book }) { }
}

export class LoadBookFailure implements Action {
  readonly type = BookActionTypes.LoadBookFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export type BookActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFailure
  | LoadBook
  | LoadBookSuccess
  | LoadBookFailure;

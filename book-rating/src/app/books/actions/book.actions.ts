import { Action } from '@ngrx/store';
import { Book } from '../shared/book';
import { HttpErrorResponse } from '@angular/common/http';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books Success',
  LoadBooksFailure = '[Book] Load Books Failure',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: { books: Book[] }) { }

  // nicht verwenden:
  // constructor(public payload: Book[]) { }
  // constructor(public books: Book[]) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BookActionTypes.LoadBooksFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export type BookActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFailure;


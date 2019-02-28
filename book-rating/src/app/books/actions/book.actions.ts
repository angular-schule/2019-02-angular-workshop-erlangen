import { Action } from '@ngrx/store';

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
  constructor(public payload: { data: any }) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BookActionTypes.LoadBooksFailure;
  constructor(public payload: { error: any }) { }
}

export type BookActions = LoadBooks | LoadBooksSuccess | LoadBooksFailure;


import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from '../reducers/book.reducer';

export const getBookState = createFeatureSelector<fromBook.State>('book');

export const getBooksLoading = createSelector(
  getBookState,
  bookState => bookState.loading
);

export const getAllBooks = createSelector(
  getBookState,
  bookState => bookState.books
);


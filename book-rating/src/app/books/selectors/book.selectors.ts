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

// Parametrized Selector
export const getBookByIsbn = createSelector(
  getAllBooks,
  (books, props) => books.find(b => b.isbn === props.isbn)
);

/*
// breaks earlier
export const getBookByIsbn2 = createSelector(
  getBookState,
  (bookState, props) => bookState.books.find(b => b.isbn === props.isbn)
);
*/

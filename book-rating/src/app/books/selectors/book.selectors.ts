import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/book.reducer';

 export const getBookState = createFeatureSelector<State>('book');

 export const getBooksLoading = createSelector(
    getBookState,
    bookState => bookState.loading
);

 export const getAllBooks = createSelector(
    getBookState,
    bookState => bookState.books
);

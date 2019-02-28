
import { BookActions, BookActionTypes } from '../actions/book.actions';
import { Book } from '../shared/book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks:
      return state;

    case BookActionTypes.LoadBooksSuccess:
      return state;

    case BookActionTypes.LoadBooksFailure:
      return state;

    default:
      return state;
  }
}

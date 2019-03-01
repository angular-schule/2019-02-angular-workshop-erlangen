
import { BookActions, BookActionTypes } from '../actions/book.actions';
import { Book } from '../shared/book';
import { ConfigActions, ConfigActionTypes } from 'src/app/actions/config.actions';

export interface State {
  books: Book[];
  loading: boolean;

  isAdmin: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
  isAdmin: false
};

export function reducer(state = initialState, action: BookActions | ConfigActions): State {

  /*
  // Pattern: chaining reducers
  const state1 = reducer1(state, action);
  const state2 = reducer2(state1, action);
  return state2;
  */

  switch (action.type) {

    case ConfigActionTypes.ChangeConfig: {
      return {
        ...state,
        isAdmin: action.payload.config.isAdmin
      };
    }

    case BookActionTypes.LoadBooks:
    case BookActionTypes.LoadBook:  {
      return {
        ...state,
        loading: true
      };
    }

    case BookActionTypes.LoadBooksSuccess: {
      const books = action.payload.books;
      return {
        ...state,
        books,
        loading: false
      };
    }

    case BookActionTypes.LoadBookSuccess: {
      const { book } = action.payload;
      book.title = 'NEU GELADEN: ' + book.title;
      const books = [
        ...state.books.filter(b => b.isbn !== book.isbn),
        book
      ];

      return {
        ...state,
        books,
        loading: false
      };
    }

    case BookActionTypes.LoadBooksFailure:
    case BookActionTypes.LoadBookFailure: {
      return {
        ...state,
        books: [],
        loading: false
      };
    }

    default:
      return state;
  }
}


import { BookActions, BookActionTypes } from '../actions/book.actions';

export interface State {

}

export const initialState: State = {

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

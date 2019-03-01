
import { ConfigActions, ConfigActionTypes } from '../actions/config.actions';

export interface State {
  config: {
    isAdmin: boolean
  };
}

export const initialState: State = {
  config: {
    isAdmin: false
  }
};

export function reducer(state = initialState, action: ConfigActions): State {
  switch (action.type) {

    case ConfigActionTypes.ChangeConfig:
      return {
        config: action.payload.config
      };

    default:
      return state;
  }
}

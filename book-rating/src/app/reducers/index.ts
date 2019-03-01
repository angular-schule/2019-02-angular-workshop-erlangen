import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromConfig from 'src/app/reducers/config.reducer';

export interface State {
  // book: fromBook.State
  config: fromConfig.State;
}

export const reducers: ActionReducerMap<State> = {
  config: fromConfig.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

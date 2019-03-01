import { Action } from '@ngrx/store';

export enum ConfigActionTypes {
  ChangeConfig = '[Config] Change Config',


}

export class ChangeConfig implements Action {
  readonly type = ConfigActionTypes.ChangeConfig;
  constructor(public payload: {
    config: {
      isAdmin: boolean }
    }
    ) {}
}


export type ConfigActions = ChangeConfig;

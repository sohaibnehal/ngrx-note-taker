import { ActionReducerMap } from '@ngrx/store';
import * as fromApp from '../reducers/app.reducer';
import { NoteTakerAppState } from '../interface/state.interface';

export const reducers: ActionReducerMap<NoteTakerAppState> = {
  state: fromApp.reducer
};
export * from '../interface/state.interface';
export * from '../selectors/';

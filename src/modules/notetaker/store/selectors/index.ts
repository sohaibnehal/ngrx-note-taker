import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppSelectors from './app.selectors';
import { NoteTakerAppState } from '../interface/state.interface';

export const selectAppState = createFeatureSelector<NoteTakerAppState>('state');
export const selectApp = createSelector(
  selectAppState,
  (state: NoteTakerAppState) => state.state
);
export const getIsLoading = createSelector(
  selectApp,
  fromAppSelectors.getLoading
);
export const getIsLoaded = createSelector(
  selectApp,
  fromAppSelectors.getLoaded
);
export const getNotes = createSelector(
  selectApp,
  fromAppSelectors.getNotes
);

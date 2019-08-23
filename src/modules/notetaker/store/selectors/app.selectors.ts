import { INoteTakerAppState } from '../interface/state.interface';

// Selector Methods
export const getLoading = (state: INoteTakerAppState) => state.loading;
export const getLoaded = (state: INoteTakerAppState) => state.loaded;
export const getNotes = (state: INoteTakerAppState) => state.notes;

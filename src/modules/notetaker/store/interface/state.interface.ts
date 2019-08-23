import { Note } from '../../models';

export interface INoteTakerAppState {
  notes: Note[];
  loading: boolean;
  loaded: boolean;
}
export interface NoteTakerAppState {
  state: INoteTakerAppState;
}

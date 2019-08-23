import { Note } from '../../models';
import * as fromAppActions from '../actions';
import { INoteTakerAppState } from '../interface/state.interface';
import { initialState } from './initial-state';

export function reducer(
  state = initialState,
  action: fromAppActions.StoreActions
): INoteTakerAppState {
  switch (action.type) {
    case fromAppActions.ADD_NOTE: {
      return {
        ...state,
        loading: true
      };
    }
    case fromAppActions.ADD_NOTE_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
    case fromAppActions.ADD_NOTE_SUCCESS: {
      const notes: Note[] = action.payload;
      return {
        ...state,
        loading: false,
        notes
      };
    }
    case fromAppActions.REMOVE_NOTE: {
      return {
        ...state,
        loading: true
      };
    }
    case fromAppActions.REMOVE_NOTE_FAIL: {
      return {
        ...state,
        loading: false
      };
    }
    case fromAppActions.REMOVE_NOTE_SUCCESS: {
      const notes: Note[] = action.payload;
      return {
        ...state,
        loading: false,
        notes
      };
    }
    case fromAppActions.LOAD_STATE: {
      return {
        ...state,
        loading: true
      };
    }
    case fromAppActions.LOAD_STATE_SUCCESS: {
      const notes: Note[] = action.payload;
      return {
        ...state,
        loading: false,
        notes
      };
    }
  }
  return state;
}

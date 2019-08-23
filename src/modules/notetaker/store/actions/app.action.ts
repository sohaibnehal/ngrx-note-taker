import { Action } from '@ngrx/store';

import { Note } from '../../models';

// Action Constants
export const ADD_NOTE = '[Notes]Add Note';
export const ADD_NOTE_FAIL = '[Notes]Add Note Fail';
export const ADD_NOTE_SUCCESS = '[Notes]Add Note Success';
export const REMOVE_NOTE = '[Notes]Remove Note';
export const REMOVE_NOTE_FAIL = '[Notes]Remove Note Fail';
export const REMOVE_NOTE_SUCCESS = '[Notes]Remove Note Success';
export const LOAD_STATE = '[Notes]Load State';
export const LOAD_STATE_SUCCESS = '[Notes]Load State Success';

// Action Creators
export class AddNote implements Action {
  readonly type = ADD_NOTE;
  constructor(public payload: Note) {}
}
export class AddNoteFail implements Action {
  readonly type = ADD_NOTE_FAIL;
  constructor(public payload: any) {}
}
export class AddNoteSuccess implements Action {
  readonly type = ADD_NOTE_SUCCESS;
  constructor(public payload: Note[]) {}
}
export class RemoveNote implements Action {
  readonly type = REMOVE_NOTE;
  constructor(public payload: number) {}
}
export class RemoveNoteFail implements Action {
  readonly type = REMOVE_NOTE_FAIL;
  constructor(public payload: any) {}
}
export class RemoveNoteSuccess implements Action {
  readonly type = REMOVE_NOTE_SUCCESS;
  constructor(public payload: Note[]) {}
}
export class LoadState implements Action {
  readonly type = LOAD_STATE;
  constructor() {}
}
export class LoadStateSuccess implements Action {
  readonly type = LOAD_STATE_SUCCESS;
  constructor(public payload: Note[]) {}
}

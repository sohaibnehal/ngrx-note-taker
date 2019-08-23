import * as NotesActions from './app.action';

export * from './app.action';

// Action types
export type StoreActions =
  | NotesActions.AddNote
  | NotesActions.AddNoteFail
  | NotesActions.AddNoteSuccess
  | NotesActions.RemoveNote
  | NotesActions.RemoveNoteFail
  | NotesActions.RemoveNoteSuccess
  | NotesActions.LoadState
  | NotesActions.LoadStateSuccess;

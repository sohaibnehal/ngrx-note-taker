import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import * as appActions from '../actions';
import { StorageService } from '../../services/storage.service';
import { Note } from '../../models';

@Injectable()
export class NotesEffects {
  constructor(
    private actions$: Actions,
    private storageService: StorageService
  ) {}

  @Effect()
  addNote$ = this.actions$.pipe(
    ofType(appActions.ADD_NOTE),
    map((action: { type: string; payload: object }) => action.payload),
    switchMap((payload: Note) => {
      return this.storageService
        .addNote(payload)
        .then((res: { notes: Note[] }) => {
          return new appActions.AddNoteSuccess(res.notes);
        })
        .catch(err => {
          of(new appActions.AddNoteFail(err));
        });
    })
  );

  @Effect({ dispatch: false })
  addNoteSuccess$ = this.actions$.pipe(
    ofType(appActions.ADD_NOTE_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  addNoteFail$ = this.actions$.pipe(
    ofType(appActions.ADD_NOTE_FAIL),
    map((error: any) => {})
  );

  @Effect()
  removeNote$ = this.actions$.pipe(
    ofType(appActions.REMOVE_NOTE),
    map((action: { type: string; payload: number }) => action.payload),
    switchMap((payload: number) => {
      return this.storageService
        .removeNote(payload)
        .then((res: { notes: Note[] }) => {
          return new appActions.RemoveNoteSuccess(res.notes);
        })
        .catch(err => {
          of(new appActions.RemoveNoteFail(err));
        });
    })
  );

  @Effect({ dispatch: false })
  removeNoteSuccess$ = this.actions$.pipe(
    ofType(appActions.REMOVE_NOTE_SUCCESS),
    map(() => {})
  );

  @Effect({ dispatch: false })
  removeNoteFail$ = this.actions$.pipe(
    ofType(appActions.REMOVE_NOTE_FAIL),
    map((error: any) => {})
  );

  @Effect()
  loadState$ = this.actions$.pipe(
    ofType(appActions.LOAD_STATE),
    switchMap((payload: Note) => {
      return this.storageService.loadNotes().then((res: { notes: Note[] }) => {
        return new appActions.LoadStateSuccess(res.notes);
      });
    })
  );

  @Effect({ dispatch: false })
  loadStateSuccess$ = this.actions$.pipe(
    ofType(appActions.LOAD_STATE_SUCCESS),
    map(() => {})
  );
}

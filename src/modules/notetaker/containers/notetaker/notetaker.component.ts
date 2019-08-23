import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Note } from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-notetaker-component',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.scss']
})
export class NoteTakerComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private store: Store<fromStore.NoteTakerAppState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadState());
    this.notes$ = this.store.select(fromStore.getNotes);
  }

  addNote(payload: Note) {
    this.store.dispatch(new fromStore.AddNote(payload));
  }

  removeNote(index: number) {
    this.store.dispatch(new fromStore.RemoveNote(index));
  }
}

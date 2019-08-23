import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  @Output() removeNote = new EventEmitter<any>();
  @Input() notes$: Note[];
  constructor() {}

  ngOnInit() {}

  onRemoveItem(index: number) {
    this.removeNote.emit(index);
  }
}

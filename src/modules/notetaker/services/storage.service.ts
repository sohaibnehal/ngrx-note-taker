import { Injectable } from '@angular/core';
import { Note } from '../models';

interface IStorageService {
  keys: object;
  addNote(note: Note): Promise<any>;
  removeNote(key: number): Promise<any>;
  loadNotes(): Promise<any>;
}

@Injectable()
export class StorageService implements IStorageService {
  keys = {
    NOTES: 'notes'
  };

  addNote(note: Note) {
    let notes = this.getItem(this.keys.NOTES);
    notes = notes ? notes : [];
    notes = [note, ...notes];
    this.setItem(this.keys.NOTES, notes);
    return Promise.resolve({ notes });
  }
  removeNote(index: number): Promise<any> {
    let notes = this.getItem(this.keys.NOTES);
    notes = notes.filter((item, i) => index !== i);
    this.setItem(this.keys.NOTES, notes);
    return Promise.resolve({ notes });
  }
  loadNotes(): Promise<any> {
    const notes = this.getItem(this.keys.NOTES);
    return Promise.resolve({ notes });
  }

  private getItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  private setItem(key: string, notes: Note[]) {
    localStorage.setItem(key, JSON.stringify(notes));
  }
}

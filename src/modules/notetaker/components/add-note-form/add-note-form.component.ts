import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss']
})
export class AddNoteFormComponent implements OnInit {
  @Output() addNote = new EventEmitter<any>();
  addnoteform: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.addnoteform = formBuilder.group({
      note: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {}

  onAddNoteForm() {
    this.validateFields(this.addnoteform);
    if (!this.addnoteform.valid) {
      return;
    }
    const payload = {
      note: this.addnoteform.get('note').value
    };
    this.addnoteform.reset();
    this.addNote.emit(payload);
  }

  validateFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsDirty();
    });
  }
}

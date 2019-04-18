import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchModalService {

  constructor() { }

  @Output() openDialog: EventEmitter<boolean> = new EventEmitter(false);
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter(false);
}

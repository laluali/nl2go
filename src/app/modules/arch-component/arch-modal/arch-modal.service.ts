import {EventEmitter, Injectable, Output} from '@angular/core';
import {EventData} from '../../../model/event-data';

@Injectable({
  providedIn: 'root'
})
export class ArchModalService {

  constructor() { }

  @Output() openDialog: EventEmitter<EventData> = new EventEmitter(false);
  @Output() closeDialog: EventEmitter<EventData> = new EventEmitter(false);
}

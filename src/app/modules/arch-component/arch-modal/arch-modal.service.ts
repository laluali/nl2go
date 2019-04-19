import {EventEmitter, Injectable, Output} from '@angular/core';
import {EventData} from '../../../model/event-data';

@Injectable({
  providedIn: 'root'
})
export class ArchModalService {

  constructor() { }
  /* Dialog open service*/
  @Output() openDialog: EventEmitter<EventData> = new EventEmitter(false);
  /* Dialog close service*/
  @Output() closeDialog: EventEmitter<EventData> = new EventEmitter(false);
}

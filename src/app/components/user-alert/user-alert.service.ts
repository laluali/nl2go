import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAlertService {

  constructor() { }

  @Output() continueClick: EventEmitter<any> = new EventEmitter(false);
  @Output() cancelClick: EventEmitter<any> = new EventEmitter(false);
}

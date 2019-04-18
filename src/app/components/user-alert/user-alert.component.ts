import { Component, OnInit } from '@angular/core';
import {UserAlertService} from './user-alert.service';
import {ArchModalService} from '../../modules/arch-component/arch-modal/arch-modal.service';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'nl-user-alert',
  templateUrl: './user-alert.component.html',
  styleUrls: ['./user-alert.component.css']
})
export class UserAlertComponent implements OnInit {

  constructor(private  userAlertService: UserAlertService,
              private  archModalService: ArchModalService) { }

  ngOnInit() {
  }

  continueClick(event: any): void {
    this.hideAlert();
    this.userAlertService.continueClick.emit(true);
  }

  cancelClick(event: any): void {
    this.hideAlert();
    this.userAlertService.cancelClick.emit(true);
  }

  hideAlert(): void {
    let eventData: any = {};
    eventData.componentName = 'UserAlertComponent';
    eventData.input = 'feedValues';
    eventData.dynamicData = isNullOrUndefined(event) ? '' : event;
    this.archModalService.closeDialog.emit(eventData);
  }
}

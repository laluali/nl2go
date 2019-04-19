import {ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {RequestCache} from '../../services/http.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArchModalService} from '../../modules/arch-component/arch-modal/arch-modal.service';
import {UserAlertService} from '../user-alert/user-alert.service';
import {User} from '../../model/user';

@Component({
  selector: 'nl-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private activatedRoute: ActivatedRoute,
              private cacheHelper: RequestCache,
              private ref: ChangeDetectorRef,
              private router: Router,
              private modalService: ArchModalService,
              private userAlertService: UserAlertService) { }

  user: User;
  userEditForm: FormGroup;

  ngOnInit() {

    this.userEditForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
    });

    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params)) {
        let responseData: any = [];
        this.cacheHelper.cache.forEach(val => responseData = val.response.body);
        this.user = responseData.filter(resp => resp.id === parseInt(params['id']))[0];
        this.userEditForm.controls['firstName'].setValue(isNullOrUndefined(this.user.firstName) ? '' : this.user.firstName);
        this.userEditForm.controls['lastName'].setValue(isNullOrUndefined(this.user.lastName) ? '' : this.user.lastName);
      }
    });

    this.userAlertService.continueClick.subscribe(
      data => {
        this.navigateToUserPage();
      }
    );
  }

  ngOnDestroy(): void {
    this.userEditForm.reset();
  }

  onSave(event: any): void {
    this.saveFormChanges();
  }

  saveFormChanges(): void {
    const cacheResponse = this.cacheHelper.cache.get(window.location.origin + '/assets/json/users.json');
    cacheResponse.response.body
      .filter(i => i.id == this.user.id)
      .map( i => {
        i.firstName = this.userEditForm.controls['firstName'].value;
        i.lastName = this.userEditForm.controls['lastName'].value;
      });
    this.cacheHelper.cache.set(window.location.origin + '/assets/json/users.json', cacheResponse);
    this.navigateToUserPage();
  }

  navigateToUserPage(): void {
    this.router.navigate(['users']);
  }

  onCancel(event: any): void {
    if (this.userEditForm.valid) {
      if (this.userEditForm.dirty) {
        let eventData: any = {};
        eventData.componentName = 'UserAlertComponent';
        eventData.input = 'feedValues';
        eventData.dynamicData = isNullOrUndefined(event) ? '' : event;
        this.modalService.openDialog.emit(eventData);
      } else {
        this.navigateToUserPage();
      }
    }
  }

  ngOnChanges(changes: any): void {
  }
}

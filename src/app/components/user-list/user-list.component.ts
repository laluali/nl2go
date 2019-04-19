import {Component, DoCheck, Input, OnDestroy, OnInit} from '@angular/core';
import {LiteralService} from '../../services/literal.service';
import {HttpService, RequestCache} from '../../services/http.service';
import {HttpClient} from '@angular/common/http';
import {UtilityService} from '../../services/utility.service';
import {ArchModalService} from '../../modules/arch-component/arch-modal/arch-modal.service';
import {isArray} from 'util';
import {of} from 'rxjs/internal/observable/of';
import {User} from '../../model/user';

@Component({
  selector: 'nl-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy, DoCheck {

  constructor(private literalSerivce: LiteralService,
              private httpService: HttpService,
              private http: HttpClient,
              private util: UtilityService,
              private modalService: ArchModalService,
              private cacheHelper: RequestCache) { }

  filteredList: any;
  columnData: any;
  refreshTable = false;
  selectedRow: User[] = [];
  tBtnDisabled = false;

  ngOnInit() {
    this.columnData = this.literalSerivce.getUserTableHeaders();
    of(this.selectedRow).subscribe(x => this.disableButtons());
  }

  ngDoCheck(): void {
    this.disableButtons();
  }

  onRowSelect(data): void {
    this.selectedRow.push(data);
  }

  ngOnDestroy(): void {
  }

  redirectToUserDetail(userId: string): void {
    this.util.routeTo('user/', userId);
  }

  showUserDetailModal(event: any) {
    let eventData: any = {};
    eventData.componentName = 'UserDetailComponent';
    eventData.input = 'feedValues';
    eventData.dynamicData = event;
    this.modalService.openDialog.emit(eventData);
  }

  deleteUser(users: any): void {
    let responseData: any;
    this.cacheHelper.cache.forEach(val => responseData = val.response.body);
    this.filteredList = [];
    if (isArray(users)) {
      users.forEach((user: User) => {
        responseData = responseData.filter(entry => entry.id != user.id);
        this.updateCache(responseData);
      });
    } else {
      responseData = responseData.filter(entry => entry.id != users.id);
      this.updateCache(responseData);
    }
    this.refreshTable = !this.refreshTable;
    this.selectedRow = [];
    this.disableButtons();
  }

  updateCache(filteredList: any) {
    let cacheResponse = this.cacheHelper.cache.get(window.location.origin + '/assets/json/users.json');
    cacheResponse.response.body = filteredList;
    this.cacheHelper.cache.set(window.location.origin + '/assets/json/users.json', cacheResponse);
  }

  onButtonClick(event: any): void {
    switch (event.buttonAlias) {
      case 'edit':
        this.redirectToUserDetail(event.id);
        break;
      case 'show':
        this.showUserDetailModal(event);
        break;
      case 'delete':
        this.deleteUser(event);
        break;
      default:
        break;
    }
  }

  onRowUnselect(data: any): void {
    this.selectedRow = this.selectedRow.filter(row => row.id != data.id);
    console.log(this.selectedRow);
  }

  multipleDelete(event: any): void {
    this.deleteUser(this.selectedRow);
  }

  disableButtons(): void {
    this.selectedRow.length > 0 ? this.tBtnDisabled = true : this.tBtnDisabled = false;
  }
}

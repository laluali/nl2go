import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'nl-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
  @Input() feedValues: any = {};
  user: User;

  ngOnInit() {
    this.user = this.feedValues.dynamicData;
  }

}

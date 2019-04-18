import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nl-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }
  @Input() feedValues: any = {};
  user: any;
  ngOnInit() {
    this.user = this.feedValues.dynamicData;
    console.log(this.user);
  }

}

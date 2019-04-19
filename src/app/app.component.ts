import { Component } from '@angular/core';
import {UtilityService} from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLoader = true;

  constructor(private util: UtilityService) {
    this.util.loaderEvent.subscribe(
      data => this.showLoader = data
    );
  }

}

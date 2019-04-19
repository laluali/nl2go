import {ComponentFactoryResolver, EventEmitter, Injectable, Output, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {UserDetailComponent} from '../components/user-detail/user-detail.component';
import {isNullOrUndefined} from 'util';
import {UserAlertComponent} from '../components/user-alert/user-alert.component';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private router: Router) { }

  @Output() loaderEvent: EventEmitter<any> = new EventEmitter<boolean>();

  getDynamicComponentInstance(container: ViewContainerRef, componentName: any, resolver: ComponentFactoryResolver, eventData: any) {
    container.clear();
    const factory: any =  resolver.resolveComponentFactory(componentName);
    const ComponentRef: any = container.createComponent(factory);
    ComponentRef.instance[eventData.input] = eventData;
    return ComponentRef.instance;
  }

  routeTo(path: string, pathParam?: string, queryParam?: any) {
    this.router.navigate(['user/', pathParam]);
  }

  getComponentInstance(componentName: string) {
    switch (componentName) {
      case 'UserDetailComponent':
        return UserDetailComponent;
      case 'UserAlertComponent':
        return  UserAlertComponent;
      default:
        return undefined;
    }
  }

  getDiffInYears(date: string) {
      var birthday = +new Date(date);
      return~~ Math.ceil(((Date.now() - birthday) / (31557600000)));
  }

  downloadArrayAsCSV(items: any[]) {
    let csv = '';
    /*let items = this.selectedRow;*/
    const delimiter = ';';
    // Loop each property of the object
    let keysCounter = 0;
    for (let key in items[0]) {
      let keysAmount = Object.keys(items[0]).length;
      // This is to not add a comma at the last cell
      // The '\r\n' adds a new line
      csv += isNullOrUndefined(key) ? '' : key + (keysCounter == keysAmount-1 ? '\r\n' : delimiter );
      ++keysCounter;
     }
    // Loop the array of objects
    for (let row = 0; row < items.length; row++) {
      let keysAmount = Object.keys(items[row]).length;
      keysCounter = 0;
      for (let key in items[row]) {
        csv += items[row][key] + (keysCounter < keysAmount - 1 ? delimiter : '\r\n' );
        ++keysCounter;
      }
      keysCounter = 0;
    }

// Once we are done looping, download the .csv by creating a link
    let link = document.createElement('a')
    link.id = 'download-csv'
    link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
    link.setAttribute('download', 'user.csv');
    document.body.appendChild(link);
    document.getElementById('download-csv').click();
  }

}

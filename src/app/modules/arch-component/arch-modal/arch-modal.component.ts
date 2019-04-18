import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChildren, ViewContainerRef} from '@angular/core';
import {ArchModalService} from './arch-modal.service';
import {UtilityService} from '../../../services/utility.service';
import {$} from 'protractor';
import {distinctUntilChanged} from 'rxjs/operators';
import {Subscription} from 'rxjs';


@Component({
  selector: 'nl-arch-modal',
  templateUrl: './arch-modal.component.html',
  styleUrls: ['./arch-modal.component.css']
})
export class ArchModalComponent implements OnInit, OnDestroy {

  constructor(private dialogBoxService: ArchModalService,
              private util: UtilityService,
              private resolver: ComponentFactoryResolver) { }

  @ViewChildren('dynamicComponent', {read: ViewContainerRef}) container;
  @Input() dialogId: string;
  @Input() title: string;
  @Input() showModal = 'modal fade';
  @Input() hideFooter = false;
  openSubscription: Subscription;


  ngOnInit() {
    this.openSubscription = this.dialogBoxService.openDialog
      .subscribe(
      eventData => {
        this.callComponent(eventData);
      },
      error => {});

    this.dialogBoxService.closeDialog
      .subscribe(
      eventData => {
        this.hideComponent(eventData.componentName);
      },
      error => {});
  }

  callComponent(eventData: any) {
    if (!this.container) {
      setTimeout(() => {
        this.callCompLogic(eventData);
      }, 0);
    } else {
      this.callCompLogic(eventData);
    }
  }

  callCompLogic(eventData: any) {
    this.container.forEach(get_results =>  {
      let parent = get_results.parentInjector;
      if (parent.view.component.dialogId === eventData.componentName) {
        this.title = this.title;
        document.getElementById(eventData.componentName).click();
        this.util.getDynamicComponentInstance(get_results, this.util.getComponentInstance(eventData.componentName), this.resolver, eventData);
      }
    });
  }

  hideCompLogic(componentName: any){
    this.container.forEach(get_results =>  {
      let parent = get_results.parentInjector;
      if (parent.view.component.dialogId === componentName) {
        parent.view.component.displayDialog = false;
        document.getElementById('close-dialog').click();
      }
    });
  }

  hideComponent(componentName: any) {
    if (!this.container) {
      setTimeout(() => {
        this.hideCompLogic(componentName);
      }, 0);
    } else {
      this.hideCompLogic(componentName);
    }
  }

  ngOnDestroy(): void {
    this.openSubscription.unsubscribe();
  }
}

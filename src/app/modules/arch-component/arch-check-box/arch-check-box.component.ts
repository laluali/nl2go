import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'nl-arch-check-box',
  templateUrl: './arch-check-box.component.html',
  styleUrls: ['./arch-check-box.component.css']
})
export class ArchCheckBoxComponent implements OnInit, DoCheck {

  constructor(private ref: ChangeDetectorRef) { }

  @Input() checkBoxData: any;
  // will delegate checkbox check event
  @Output() checkBoxSelect: EventEmitter<any> = new EventEmitter<any>();
  // will delegate checkbox uncheck event
  @Output() checkBoxUnSelect: EventEmitter<any> = new EventEmitter<any>();

  check = false;
  @Input() objectArray: any[];

  ngOnInit() {
  }

  onChange(clickEvent: any): any {
    clickEvent.target.checked ? this.checkBoxSelect.emit(this.checkBoxData) : this.checkBoxUnSelect.emit(this.checkBoxData);
  }

  ngDoCheck(): void {
    this.objectArray.includes(this.checkBoxData) ? this.check = true : this.check = false;
    this.ref.detectChanges();
  }

}

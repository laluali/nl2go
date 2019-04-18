import {Component, forwardRef, Input, OnChanges, OnInit} from '@angular/core';
import {FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'nl-arch-text-box',
  templateUrl: './arch-text-box.component.html',
  styleUrls: ['./arch-text-box.component.css']
})
export class ArchTextBoxComponent implements OnInit, OnChanges {
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() controlName: FormControl;
  private innerValue: any = '';

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}

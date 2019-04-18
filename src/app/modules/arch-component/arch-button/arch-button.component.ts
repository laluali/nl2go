import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'nl-arch-button',
  templateUrl: './arch-button.component.html',
  styleUrls: ['./arch-button.component.css']
})
export class ArchButtonComponent implements OnInit, OnChanges {

  constructor() { }

  @Output() buttonClick: any = new EventEmitter<any>();
  @Input() label: string;
  @Input() buttonData: any;
  @Input() buttonStyle: string;
  @Input() disabled = false;
  @Input() content: string;

  ngOnInit(): void {

  }

  ngOnChanges(): void {
  }

  onButtonClick(event: any): void {
    this.buttonClick.emit(this.buttonData);
  }
}

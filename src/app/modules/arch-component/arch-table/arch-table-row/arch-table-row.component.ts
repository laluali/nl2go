import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nl-arch-table-row',
  templateUrl: './arch-table-row.component.html',
  styleUrls: ['./arch-table-row.component.css']
})
export class ArchTableRowComponent implements OnInit {

  constructor() { }

  @Input() dataList;
  @Input() isHeaderColumnRow = false;
  @Input() isSelectable = false;
  @Output() rowActionEvent: any = new EventEmitter<any>();

  ngOnInit() {
  }


  onRowSelect(event): any {
    this.rowActionEvent.emit(event);
}
}

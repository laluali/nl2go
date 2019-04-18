import {ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilityService} from '../../../services/utility.service';

@Component({
  selector: 'nl-arch-table',
  templateUrl: './arch-table.component.html',
  styleUrls: ['./arch-table.component.css']
})
export class ArchTableComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private ref: ChangeDetectorRef, private http: HttpClient, private util: UtilityService) { }

  @Input() tableHeader: string;
  @Input() recordsPerPage = 10;
  @Input() columnData: any;
  @Input() refreshTable: boolean;
  @Input() disabled: boolean;
  @Input() selectedList: any[];
  @Output() selectedRow: any = new EventEmitter<any>();
  @Output() unSelectedRow: any = new EventEmitter<any>();
  @Output() buttonClick: any = new EventEmitter<any>();
  @Output() multipleDeleteClick: any = new EventEmitter<any>();

  rowData: any;
  pageableArray: any;

  ngOnInit() {
  }

  onRowSelect(event: any): any {
    this.selectedRow.emit(event);
  }

  ngOnDestroy(): void {
  }

  onButtonClick(event: any, alias: any): void {
    event.buttonAlias = alias;
    this.buttonClick.emit(event);
  }

  pagedArray(event: any): any {
    this.pageableArray = event;
    this.ref.detectChanges();
  }

  ngOnChanges(): void {
    this.getData();
  }

  getData() {
    this.http.get(window.location.origin + '/assets/json/users.json', {observe: 'response'}).subscribe(
      success => {
        this.rowData = success['body'];
      },
      error => {
        console.log(error);
      }
    );
  }

  onRowUnSelect(event: any) {
    this.unSelectedRow.emit(event);
  }

  onMultipleDelete(event: any): void {
    this.multipleDeleteClick.emit(event);
  }

  downloadExcel() {
    this.util.downloadArrayAsCSV(this.selectedList);
  }
}

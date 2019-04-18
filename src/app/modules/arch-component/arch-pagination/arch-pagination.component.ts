import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ArchPaginationService} from './arch-pagination.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'nl-arch-pagination',
  templateUrl: './arch-pagination.component.html',
  styleUrls: ['./arch-pagination.component.css']
})
export class ArchPaginationComponent implements OnInit, OnChanges {

  constructor(private pageService: ArchPaginationService) { }
  // pager object
  pager: any = {};
  // array of all items to be paged
  @Input() allItems;
  // paged items
  pagedItems: any[];
  // emit paged array
  @Output() pagedEvent: any = new EventEmitter<any>();

  ngOnInit() {
    // this.setPage(1);
  }

  setPage(page: number) {
    if (!isNullOrUndefined(this.allItems)) {
      // get pager object from service
      this.pager = this.pageService.getPager(this.allItems.length, page);

      // get current page of items
      this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
      this.pagedEvent.emit(this.pagedItems);
    }

  }

  ngOnChanges(changes: any): void {
    this.setPage(1);
  }
}

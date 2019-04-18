import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchTableComponent } from './arch-table/arch-table.component';
import { ArchCheckBoxComponent } from './arch-check-box/arch-check-box.component';
import { ArchTextBoxComponent } from './arch-text-box/arch-text-box.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArchTableRowComponent } from './arch-table/arch-table-row/arch-table-row.component';
import { ArchPaginationComponent } from './arch-pagination/arch-pagination.component';
import { ArchButtonComponent } from './arch-button/arch-button.component';
import { ArchModalComponent } from './arch-modal/arch-modal.component';
import {ArchModalService} from './arch-modal/arch-modal.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ArchTableComponent,
    ArchTextBoxComponent,
    ArchCheckBoxComponent,
    ArchModalComponent,
    ArchButtonComponent
  ],
  declarations: [ArchTableComponent,
                 ArchCheckBoxComponent,
                 ArchTextBoxComponent,
                 ArchTableRowComponent,
                 ArchPaginationComponent,
                 ArchButtonComponent,
                 ArchModalComponent],
  providers: [ArchModalService]
})
export class ArchComponentModule { }

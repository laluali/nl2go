import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchTableRowComponent } from './arch-table-row.component';

describe('ArchTableRowComponent', () => {
  let component: ArchTableRowComponent;
  let fixture: ComponentFixture<ArchTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

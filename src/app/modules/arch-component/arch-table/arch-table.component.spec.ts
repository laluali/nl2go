import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchTableComponent } from './arch-table.component';

describe('ArchTableComponent', () => {
  let component: ArchTableComponent;
  let fixture: ComponentFixture<ArchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

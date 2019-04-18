import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchPaginationComponent } from './arch-pagination.component';

describe('ArchPaginationComponent', () => {
  let component: ArchPaginationComponent;
  let fixture: ComponentFixture<ArchPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

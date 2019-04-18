import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchModalComponent } from './arch-modal.component';

describe('ArchModalComponent', () => {
  let component: ArchModalComponent;
  let fixture: ComponentFixture<ArchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

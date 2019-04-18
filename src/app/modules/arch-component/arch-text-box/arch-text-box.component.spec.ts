import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchTextBoxComponent } from './arch-text-box.component';

describe('ArchTextBoxComponent', () => {
  let component: ArchTextBoxComponent;
  let fixture: ComponentFixture<ArchTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

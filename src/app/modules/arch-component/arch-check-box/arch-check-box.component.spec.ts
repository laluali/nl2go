import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchCheckBoxComponent } from './arch-check-box.component';

describe('ArchCheckBoxComponent', () => {
  let component: ArchCheckBoxComponent;
  let fixture: ComponentFixture<ArchCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

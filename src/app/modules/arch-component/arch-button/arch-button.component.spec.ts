import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchButtonComponent } from './arch-button.component';

describe('ArchButtonComponent', () => {
  let component: ArchButtonComponent;
  let fixture: ComponentFixture<ArchButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

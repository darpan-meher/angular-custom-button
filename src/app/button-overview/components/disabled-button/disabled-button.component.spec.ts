import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledButtonComponent } from './disabled-button.component';

describe('DisabledButtonComponent', () => {
  let component: DisabledButtonComponent;
  let fixture: ComponentFixture<DisabledButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisabledButtonComponent]
    });
    fixture = TestBed.createComponent(DisabledButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

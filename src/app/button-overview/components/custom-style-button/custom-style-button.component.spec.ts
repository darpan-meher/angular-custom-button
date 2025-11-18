import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStyleButtonComponent } from './custom-style-button.component';

describe('CustomStyleButtonComponent', () => {
  let component: CustomStyleButtonComponent;
  let fixture: ComponentFixture<CustomStyleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomStyleButtonComponent]
    });
    fixture = TestBed.createComponent(CustomStyleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

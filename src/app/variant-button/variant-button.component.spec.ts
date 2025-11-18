import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantButtonComponent } from './variant-button.component';

describe('VariantButtonComponent', () => {
  let component: VariantButtonComponent;
  let fixture: ComponentFixture<VariantButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariantButtonComponent]
    });
    fixture = TestBed.createComponent(VariantButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

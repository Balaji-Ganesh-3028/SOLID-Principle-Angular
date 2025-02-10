import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListViolationComponent } from './product-list-violation.component';

describe('ProductListViolationComponent', () => {
  let component: ProductListViolationComponent;
  let fixture: ComponentFixture<ProductListViolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListViolationComponent]
    });
    fixture = TestBed.createComponent(ProductListViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

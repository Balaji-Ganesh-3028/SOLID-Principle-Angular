import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceSegregationPrincipleComponent } from './interface-segregation-principle.component';

describe('InterfaceSegregationPrincipleComponent', () => {
  let component: InterfaceSegregationPrincipleComponent;
  let fixture: ComponentFixture<InterfaceSegregationPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceSegregationPrincipleComponent]
    });
    fixture = TestBed.createComponent(InterfaceSegregationPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

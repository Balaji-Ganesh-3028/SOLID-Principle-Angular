import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResponsibilityPrincipleComponent } from './single-responsibility-principle.component';

describe('SingleResponsibilityPrincipleComponent', () => {
  let component: SingleResponsibilityPrincipleComponent;
  let fixture: ComponentFixture<SingleResponsibilityPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleResponsibilityPrincipleComponent]
    });
    fixture = TestBed.createComponent(SingleResponsibilityPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

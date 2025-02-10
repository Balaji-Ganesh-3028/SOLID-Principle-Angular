import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInversionPrincipleComponent } from './dependency-inversion-principle.component';

describe('DependencyInversionPrincipleComponent', () => {
  let component: DependencyInversionPrincipleComponent;
  let fixture: ComponentFixture<DependencyInversionPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInversionPrincipleComponent]
    });
    fixture = TestBed.createComponent(DependencyInversionPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenClosedPrincipleComponent } from './open-closed-principle.component';

describe('OpenClosedPrincipleComponent', () => {
  let component: OpenClosedPrincipleComponent;
  let fixture: ComponentFixture<OpenClosedPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenClosedPrincipleComponent]
    });
    fixture = TestBed.createComponent(OpenClosedPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

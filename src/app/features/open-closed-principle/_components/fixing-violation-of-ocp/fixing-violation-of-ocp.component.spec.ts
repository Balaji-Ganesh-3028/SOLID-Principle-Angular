import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixingViolationOfOcpComponent } from './fixing-violation-of-ocp.component';

describe('FixingViolationOfOcpComponent', () => {
  let component: FixingViolationOfOcpComponent;
  let fixture: ComponentFixture<FixingViolationOfOcpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixingViolationOfOcpComponent]
    });
    fixture = TestBed.createComponent(FixingViolationOfOcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixingViolationOfSrpComponent } from './fixing-violation-of-srp.component';

describe('FixingViolationOfSrpComponent', () => {
  let component: FixingViolationOfSrpComponent;
  let fixture: ComponentFixture<FixingViolationOfSrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixingViolationOfSrpComponent]
    });
    fixture = TestBed.createComponent(FixingViolationOfSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationOfSrpComponent } from './violation-of-srp.component';

describe('ViolationOfSrpComponent', () => {
  let component: ViolationOfSrpComponent;
  let fixture: ComponentFixture<ViolationOfSrpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViolationOfSrpComponent]
    });
    fixture = TestBed.createComponent(ViolationOfSrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationOfOcpComponent } from './violation-of-ocp.component';

describe('ViolationOfOcpComponent', () => {
  let component: ViolationOfOcpComponent;
  let fixture: ComponentFixture<ViolationOfOcpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViolationOfOcpComponent]
    });
    fixture = TestBed.createComponent(ViolationOfOcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiskovSubtitutionPrincipleComponent } from './liskov-subtitution-principle.component';

describe('LiskovSubtitutionPrincipleComponent', () => {
  let component: LiskovSubtitutionPrincipleComponent;
  let fixture: ComponentFixture<LiskovSubtitutionPrincipleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiskovSubtitutionPrincipleComponent]
    });
    fixture = TestBed.createComponent(LiskovSubtitutionPrincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

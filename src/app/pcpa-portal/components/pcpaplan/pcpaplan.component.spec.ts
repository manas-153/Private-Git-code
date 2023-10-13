import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpaplanComponent } from './pcpaplan.component';

describe('PcpaplanComponent', () => {
  let component: PcpaplanComponent;
  let fixture: ComponentFixture<PcpaplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcpaplanComponent]
    });
    fixture = TestBed.createComponent(PcpaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

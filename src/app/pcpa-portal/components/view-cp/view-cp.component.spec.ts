import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCpComponent } from './view-cp.component';

describe('ViewCpComponent', () => {
  let component: ViewCpComponent;
  let fixture: ComponentFixture<ViewCpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCpComponent]
    });
    fixture = TestBed.createComponent(ViewCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

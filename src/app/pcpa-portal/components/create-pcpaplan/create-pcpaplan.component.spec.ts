import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePCPAPlanComponent } from './create-pcpaplan.component';

describe('CreatePCPAPlanComponent', () => {
  let component: CreatePCPAPlanComponent;
  let fixture: ComponentFixture<CreatePCPAPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePCPAPlanComponent]
    });
    fixture = TestBed.createComponent(CreatePCPAPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDialogueComponent } from './loader-dialogue.component';

describe('LoaderDialogueComponent', () => {
  let component: LoaderDialogueComponent;
  let fixture: ComponentFixture<LoaderDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderDialogueComponent]
    });
    fixture = TestBed.createComponent(LoaderDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

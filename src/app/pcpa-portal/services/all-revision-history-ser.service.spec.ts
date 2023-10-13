import { TestBed } from '@angular/core/testing';

import { AllRevisionHistorySerService } from './all-revision-history-ser.service';

describe('AllRevisionHistorySerService', () => {
  let service: AllRevisionHistorySerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllRevisionHistorySerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ViewCpDataServiceService } from './view-cp-data-service.service';

describe('ViewCpDataServiceService', () => {
  let service: ViewCpDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCpDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

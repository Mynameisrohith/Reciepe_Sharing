import { TestBed } from '@angular/core/testing';

import { ReciepeServiceService } from './reciepe-service.service';

describe('ReciepeServiceService', () => {
  let service: ReciepeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciepeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

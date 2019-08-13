import { TestBed } from '@angular/core/testing';

import { SyncServiceService } from './sync-service.service';

describe('SyncServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SyncServiceService = TestBed.get(SyncServiceService);
    expect(service).toBeTruthy();
  });
});

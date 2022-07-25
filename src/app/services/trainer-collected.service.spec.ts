import { TestBed } from '@angular/core/testing';

import { TrainerCollectedService } from './trainer-collected.service';

describe('TrainerCollectedService', () => {
  let service: TrainerCollectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerCollectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

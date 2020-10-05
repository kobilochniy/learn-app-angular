import { TestBed } from '@angular/core/testing';

import { UserStatisticService } from './user-statistic.service';

describe('UserStatisticService', () => {
  let service: UserStatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

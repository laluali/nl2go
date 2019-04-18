import { TestBed, inject } from '@angular/core/testing';

import { ArchPaginationService } from './arch-pagination.service';

describe('ArchPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchPaginationService]
    });
  });

  it('should be created', inject([ArchPaginationService], (service: ArchPaginationService) => {
    expect(service).toBeTruthy();
  }));
});

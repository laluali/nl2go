import { TestBed, inject } from '@angular/core/testing';

import { ArchModalService } from './arch-modal.service';

describe('ArchModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchModalService]
    });
  });

  it('should be created', inject([ArchModalService], (service: ArchModalService) => {
    expect(service).toBeTruthy();
  }));
});

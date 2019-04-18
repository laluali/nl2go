import { TestBed, inject } from '@angular/core/testing';

import { GlobalConstantService } from './global-constant.service';

describe('GlobalConstantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalConstantService]
    });
  });

  it('should be created', inject([GlobalConstantService], (service: GlobalConstantService) => {
    expect(service).toBeTruthy();
  }));
});

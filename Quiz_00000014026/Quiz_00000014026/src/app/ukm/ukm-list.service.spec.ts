import { TestBed } from '@angular/core/testing';

import { UkmListService } from './ukm-list.service';

describe('UkmListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UkmListService = TestBed.get(UkmListService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClassFeesService } from './class-fees.service';

describe('ClassFeesService', () => {
  let service: ClassFeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassFeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

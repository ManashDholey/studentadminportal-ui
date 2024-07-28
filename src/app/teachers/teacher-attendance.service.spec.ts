import { TestBed } from '@angular/core/testing';

import { TeacherAttendanceService } from './teacher-attendance.service';

describe('TeacherAttendanceService', () => {
  let service: TeacherAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

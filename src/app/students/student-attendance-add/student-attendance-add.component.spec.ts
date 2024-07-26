import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAttendanceAddComponent } from './student-attendance-add.component';

describe('StudentAttendanceAddComponent', () => {
  let component: StudentAttendanceAddComponent;
  let fixture: ComponentFixture<StudentAttendanceAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAttendanceAddComponent]
    });
    fixture = TestBed.createComponent(StudentAttendanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

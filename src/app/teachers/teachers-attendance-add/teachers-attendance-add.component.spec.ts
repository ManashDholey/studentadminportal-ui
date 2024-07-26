import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAttendanceAddComponent } from './teachers-attendance-add.component';

describe('TeachersAttendanceAddComponent', () => {
  let component: TeachersAttendanceAddComponent;
  let fixture: ComponentFixture<TeachersAttendanceAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersAttendanceAddComponent]
    });
    fixture = TestBed.createComponent(TeachersAttendanceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

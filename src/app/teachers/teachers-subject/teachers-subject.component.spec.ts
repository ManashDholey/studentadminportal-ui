import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSubjectComponent } from './teachers-subject.component';

describe('TeachersSubjectComponent', () => {
  let component: TeachersSubjectComponent;
  let fixture: ComponentFixture<TeachersSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersSubjectComponent]
    });
    fixture = TestBed.createComponent(TeachersSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersSubjectAddComponent } from './teachers-subject-add.component';

describe('TeachersSubjectAddComponent', () => {
  let component: TeachersSubjectAddComponent;
  let fixture: ComponentFixture<TeachersSubjectAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersSubjectAddComponent]
    });
    fixture = TestBed.createComponent(TeachersSubjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

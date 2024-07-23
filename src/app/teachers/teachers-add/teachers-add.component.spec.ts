import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersAddComponent } from './teachers-add.component';

describe('TeachersAddComponent', () => {
  let component: TeachersAddComponent;
  let fixture: ComponentFixture<TeachersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachersAddComponent]
    });
    fixture = TestBed.createComponent(TeachersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFeesComponent } from './class-fees.component';

describe('ClassFeesComponent', () => {
  let component: ClassFeesComponent;
  let fixture: ComponentFixture<ClassFeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassFeesComponent]
    });
    fixture = TestBed.createComponent(ClassFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

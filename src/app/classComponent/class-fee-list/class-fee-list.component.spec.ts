import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFeeListComponent } from './class-fee-list.component';

describe('ClassFeeListComponent', () => {
  let component: ClassFeeListComponent;
  let fixture: ComponentFixture<ClassFeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassFeeListComponent]
    });
    fixture = TestBed.createComponent(ClassFeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

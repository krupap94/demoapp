import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAPIAddComponent } from './student-apiadd.component';

describe('StudentAPIAddComponent', () => {
  let component: StudentAPIAddComponent;
  let fixture: ComponentFixture<StudentAPIAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAPIAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAPIAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

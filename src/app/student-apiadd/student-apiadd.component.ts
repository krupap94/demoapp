import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDataService } from '../student-data.service';
import { StudentDTOAdd } from '../studentDTO-add';

@Component({
  selector: 'app-student-apiadd',
  templateUrl: './student-apiadd.component.html',
  styleUrls: ['./student-apiadd.component.css']
})
export class StudentAPIAddComponent {
  student: StudentDTOAdd= new StudentDTOAdd();
submitStudent(studentForm: NgForm): void{
  console.log('Submit Click');
  // this.student.sName='Krupa';
  // this.student.semester=1;
  // this.student.hobby='Eating';
  this.studentDataService.addStudent(this.student).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/studentlist']);
  })
}

constructor(private studentDataService: StudentDataService, private router: Router){}


}

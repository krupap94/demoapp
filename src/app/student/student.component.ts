import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[]=[]
constructor(private studentDataService: StudentDataService){

}
  ngOnInit(): void {
   this.studentDataService.getData().subscribe(data=>{
    this.students=data;
    console.log(this.students);
  
   })
  }
}

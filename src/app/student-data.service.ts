import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
import { StudentDTOAdd } from './studentDTO-add';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private httpClient: HttpClient) { }
  getData():Observable<Student[]>{
    let students: Student[]=[];
    return this.httpClient.get<Student[]>('https://182.237.13.165/APIDemoApplication/api/Student/GetData');
  }
  addStudent(student: StudentDTOAdd): Observable<Student>{
    return this.httpClient.post<Student>
      ('https://182.237.13.165/APIDemoApplication/api/Student/add',student
      );
  
}
  }


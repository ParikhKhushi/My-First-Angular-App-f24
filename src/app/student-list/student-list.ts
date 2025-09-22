import { Component } from '@angular/core';
import {of} from 'rxjs';
import {User} from '../../shared/models/User';
import {StudentDetail} from '../student-detail/student-detail';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [
    StudentDetail,
    NgForOf,
    NgForOf,
  ],
  templateUrl: './student-list.html',
  standalone: true,
  styleUrl: './student-list.css'
})
export class StudentList {
  user1 : User = {id: 1, firstName: "Matt", lastName: "Haug", department: "Programming", isAdmin: false};
  user2 : User = {id: 2, firstName: "Darren", lastName: "Takakki", department: "Web Dev", isAdmin: true};
  //Can declare values either way
  userList: User[] = //any[] would have worked as well
    [this.user1,this.user2,
      {id: 3, firstName: "John", lastName: "Doe", department: "Programming", isAdmin: false},
      {id: 4, firstName: "Jane", lastName: "Doe", department: "Programming", isAdmin:true}
    ]

      //Make a placeholder var
  //Catch the onclick event from the html
  selectedStudent?:User
  //Function to set which studnet to display


  selectStudent(student: User): void {
    this.selectedStudent = student;
  }
}

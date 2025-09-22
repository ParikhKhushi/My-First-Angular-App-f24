import {Component, Input} from '@angular/core';
import {User} from '../../shared/models/User';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-student-detail',
  imports: [
    NgIf
  ],
  templateUrl: './student-detail.html',
  standalone: true,
  styleUrl: './student-detail.css'
})
export class StudentDetail {
    @Input() student?: User
}

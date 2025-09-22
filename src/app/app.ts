import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from '../shared/models/User';
import {JsonPipe,NgForOf } from '@angular/common';
import {StudentList} from './student-list/student-list';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'User Generation';

}

export class App {
}

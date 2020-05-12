import { Component } from '@angular/core';
import * as moment from 'moment';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  dateStampDp: any;

  userModel = new User('', 'rob@test.com', 55667788, '', 'morning', true);

}

import { Component } from '@angular/core';
import { user, users } from './sample-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  testUser = user;
  testUsers = users;
}

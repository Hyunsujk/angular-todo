import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: ` <h1>Welcome to {{ title }}!</h1> `, // inline - template
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My To Do List APP';
}

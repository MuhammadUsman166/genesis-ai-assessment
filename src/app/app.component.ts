import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';

  userList: any[] = [
    {
      name: 'Alice Johnson',
      email: 'alice@example.com'
    },
    {
      name: 'Bob Smith',
      email: 'bob@example.com'
    },
    {
      name: 'Charlie Lee',
      email: 'charlie@example.com'
    },
  ];
}

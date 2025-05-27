import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() user: { name: string, email: string }[] = [];
  

  filterUser(event: Event) {
    const inputText = event.target as HTMLInputElement;
    const text = inputText.value.toLowerCase();
    this.user = this.user.filter(user => user.name.toLowerCase().includes(text));
  }
}

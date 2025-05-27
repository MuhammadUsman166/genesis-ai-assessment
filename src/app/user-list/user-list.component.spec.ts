import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const userList = [
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
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent]
    });
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    component.user = userList;
    fixture.detectChanges();
  });

  it('should show when filter is empty', () => {
    const input = new Event('input')
    component.filterUser({target: {value: ''}} as any)
    expect(component).toBeTruthy();
  });
});

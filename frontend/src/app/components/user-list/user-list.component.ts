import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  updateUser(user: User) {
    this.router.navigate(['/edite-user', user.id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
     
      this.ngOnInit();
    });
  }

  confirmAndDelete(user: User): void {
    if (user.id !== undefined) {
      this.deleteUser(user.id!); 
    } else {
      console.error('');
    }
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}


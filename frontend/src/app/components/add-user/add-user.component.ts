import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { UserService, User } from '../../services/user.service';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: User = { name: '', second_name: '', city: '', email: '' };
  constructor(private userService: UserService,private router: Router) {}

  submitForm() {
    this.userService.addUser(this.user).subscribe(() => {
      alert('Utilisateur ajouté !');
      this.router.navigate(['/users']);
    });
  }
  
}


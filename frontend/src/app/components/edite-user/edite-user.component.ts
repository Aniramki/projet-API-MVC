import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-edite-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edite-user.component.html',
  styleUrls: ['./edite-user.component.css']
})
export class EditeUserComponent implements OnInit {
  user: User = { name: '', second_name: '', city: '', email: '' };
  id!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(this.id).subscribe(user => {
      this.user = user;
    });
  }

  submitForm() {
    this.userService.updateUser(this.id, this.user).subscribe(() => {
      alert('Utilisateur modifié !');
      this.router.navigate(['/users']);
    });
  }
}

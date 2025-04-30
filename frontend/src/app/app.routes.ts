import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditeUserComponent } from './components/edite-user/edite-user.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edite-user/:id', component: EditeUserComponent}
  
];

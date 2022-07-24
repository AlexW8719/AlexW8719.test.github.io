import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './hw-routes/angular-pages/home/home/home.component';
import { CenzorComponent } from './hw-routes/angular-pages/works/cenzor/cenzor.component';
import { UserListComponent } from './hw-routes/angular-pages/works/user-list/user-list.component';
import { TaskListComponent } from './hw-routes/angular-pages/works/task-list/task-list.component';

const routes: Routes = [
  { path: `home`, component: HomeComponent },

  { path: `works/censor`, component: CenzorComponent },
  { path: `works/userlist`, component: UserListComponent },
  { path: `works/tasklist`, component: TaskListComponent },
  { path: ``, redirectTo: `/home`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileService} from './profile-service/profile.service';
import {Userhub} from './userhub';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'profiles', component:  UserInfoComponent},
  { path: '', redirectTo:"/profiles", pathMatch:"full"},
  { path:'**', component:UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

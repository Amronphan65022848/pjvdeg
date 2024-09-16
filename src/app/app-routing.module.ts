import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrentActivitiesComponent } from './Activities/current-activities/current-activities.component';
import { ActivitySignupComponent } from './Activities/activity-signup/activity-signup.component';
import { ActivityClosedSignupComponent } from './Activities/activity-closed-signup/activity-closed-signup.component';
import { ActivityCreationAdminComponent } from './admins/activity-creation-admin/activity-creation-admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"register",component : RegisterComponent},
  {path:"login",component : LoginComponent},
  {path:"reset",component : ResetpasswordComponent},
    // {path: '', component: HomeComponent, pathMatch: 'full' },
  {path:"home",component: HomeComponent},
  {path:"activity",component: CurrentActivitiesComponent},
  {path:"activity-sinup",component: ActivitySignupComponent},
  {path:"activity-close",component: ActivityClosedSignupComponent},
  {path:"admin",component: ActivityCreationAdminComponent},
  {path:"proflie",component: ProfileComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}

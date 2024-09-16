import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarousalComponent } from './home/component/carousal/carousal.component';
import { CurrentActivitiesCarousalComponent } from './home/component/current-activities-carousal/current-activities-carousal.component';
import { UpcomingActivitiesCarousalComponent } from './home/component/upcoming-activities-carousal/upcoming-activities-carousal.component';
import { PastActivitiesCarousalComponent } from './home/component/past-activities-carousal/past-activities-carousal.component';
import { CurrentActivitiesComponent } from './Activities/current-activities/current-activities.component';
import { ActivitySignupComponent } from './Activities/activity-signup/activity-signup.component';
import { FormComponent } from './Activities/activity-signup/component/form/form.component';
import { ActivityClosedSignupComponent } from './Activities/activity-closed-signup/activity-closed-signup.component';
import { ActivityCreationAdminComponent } from './admins/activity-creation-admin/activity-creation-admin.component';
import { SearchBarComponent } from './admins/componets/search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './profile/component/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarousalComponent,
    CurrentActivitiesCarousalComponent,
    UpcomingActivitiesCarousalComponent,
    PastActivitiesCarousalComponent,
    CurrentActivitiesComponent,
    ActivitySignupComponent,
    FormComponent,
    ActivityClosedSignupComponent,
    ActivityCreationAdminComponent,
    SearchBarComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

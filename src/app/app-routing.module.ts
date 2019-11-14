import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'experience/:name', component: ExperienceComponent},
  {path: '', redirectTo: '/signup', pathMatch: 'full' },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

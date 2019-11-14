import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CoreModule } from './core/core.module';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SignupComponent,
    LoginComponent,
    CustomFormComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

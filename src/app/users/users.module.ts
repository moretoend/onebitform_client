import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    HttpModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class UsersModule { }

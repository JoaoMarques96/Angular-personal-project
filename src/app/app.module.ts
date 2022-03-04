import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from "@angular/common/http"
import {FormsModule} from "@angular/forms"



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { EmployeeService } from './services/employee.service';





@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent,
    LoginUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

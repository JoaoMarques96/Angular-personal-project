import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AppComponent } from './app.component';
import { ViewEmployeeGuardGuard } from './employee-guard/view-employee-guard.guard';
import { UpdateEmployeeGuardGuard } from './employee-guard/update-employee-guard.guard';
import { LoginGuardGuard } from './employee-guard/login-guard.guard';

const routes: Routes = [
  {path:'login-user',component:LoginUserComponent},
  
  {path:'employees',
  canActivate:[LoginGuardGuard],
  component:EmployeeListComponent},

  {path:'create-employee',
  canActivate:[LoginGuardGuard],
  component:CreateEmployeeComponent},

  {
    path:'update-employee/:id',
    canActivate:[UpdateEmployeeGuardGuard,LoginGuardGuard],
    component:UpdateEmployeeComponent
  },
  
  {
    path:'view-employee/:id',
    canActivate:[ViewEmployeeGuardGuard,LoginGuardGuard],
    component:ViewEmployeeComponent
  },
  {path:'',redirectTo:'employees',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

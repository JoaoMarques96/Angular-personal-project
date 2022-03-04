import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

 
  user:User=new User();
  constructor(private _employeeService:EmployeeService,
    private _router:Router) { }

  ngOnInit(): void {

  }

  userLogin(){
    this._employeeService.loginUser(this.user);

      
  }

}

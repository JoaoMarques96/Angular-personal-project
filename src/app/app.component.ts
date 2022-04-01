import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee no app.component.ts';

  showMenu:boolean =false;


  constructor(private _employeeService:EmployeeService){

  }

  ngOnInit(){
    this._employeeService.showMenu.subscribe(

      show =>this.showMenu =show 
    );
  }

  loginUeeser(){
    this._employeeService.loginUser
  }
}



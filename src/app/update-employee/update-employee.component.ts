import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number;
  employee: Employee = new Employee();
  
  constructor(private _employeeService:EmployeeService,
   private _activatedRoute:ActivatedRoute,
   private _router:Router) { }
  // o activated route permite saber a rota de um determinado parametro 
  ngOnInit(): void {  
  this.id= this._activatedRoute.snapshot.params['id'];
  
  this._employeeService.getEmployeeById(this.id).subscribe(data => {
  this.employee = data;
  }, error => console.log(error));
 
  }

  onSubmit(){
  this._employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
  this._router.navigateByUrl('/employees');
  //this.goToEmployeeList();
   }
   , error => console.log(error));
  }

  //goToEmployeeList(){
    //this._router.navigateByUrl('/employees');
  //}

}

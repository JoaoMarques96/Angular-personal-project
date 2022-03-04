import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private _employeeService:EmployeeService,
    private _router:Router) { }

  ngOnInit(): void {
    
  }

  SaveEmployee(){
  this._employeeService.createEmployee(this.employee).subscribe(
  data =>{
  console.log(data);
  this.goToEmployeeList();

 // esta ou a forma acima são possiveis this._router.navigateByUrl("/employees")
}
)
}

goToEmployeeList(){
  this._router.navigate(['/employees']);
}

//se eu no create html quisesse chamar antes esta função para guardar os dados 
//onSubmit(){
 // console.log(this.employee);
 // this.SaveEmployee();
//}

}
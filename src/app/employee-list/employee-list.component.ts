import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[]=[];

  filters ={
    keyword:''
  }

  constructor(private _employeeService: EmployeeService,
   private _router:Router) { }

  ngOnInit(): void {
    //aqui é feita a leitura mal arranque o parametro em questão, daí estar aqui a ser executada a lista
    //de todos de todos os parametros 
    this.listEmployees();
    
  }

listEmployees(){
  this._employeeService.getEmployee().subscribe(
    data =>this.employees=this.filterEmployees(data)
  )
}

deleteEmployee(id:number){
this._employeeService.deleteEmployee(id).subscribe(data => {
  console.log(data);
  this.listEmployees();
})

  }

  updateEmployee(id:number){
    this._router.navigate(['update-employee', id]);
  }

  employeeDetails(id:number){
    this._router.navigate(['view-employee', id]);
  }

  filterEmployees(employees:Employee[]){
    return employees.filter((e)=>{
      return( e.firstName?.toLowerCase().includes(this.filters.keyword.toLowerCase()) || e.lastName?.toLowerCase().includes(this.filters.keyword.toLowerCase())||
      e.emailId?.toLowerCase().includes(this.filters.keyword.toLowerCase()))
    })
  }

}




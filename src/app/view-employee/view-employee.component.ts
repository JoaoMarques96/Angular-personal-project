import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id:number;
  employee:Employee
  constructor(private _employeeService:EmployeeService,private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._ActivatedRoute.snapshot.params['id'];

    //this.employee = new Employee();
    this._employeeService.getEmployeeById(this.id).subscribe( data => {
    this.employee = data;
    });

  }

}

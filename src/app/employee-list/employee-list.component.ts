import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employee';
import { Router } from '@angular/router';
import {jsPDF} from "jspdf"


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})


export class EmployeeListComponent implements OnInit {

  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  employees:Employee[]=[];

key: string='firstName';
reverse: boolean=false;
sort(key:any){
  this.key = key;
  this.reverse=!this.reverse;
}

  filters ={
    keyword:''
  }

  page: number =1;


  constructor(private _employeeService: EmployeeService,
   private _router:Router) { }

  ngOnInit(): void {
    //aqui é feita a leitura mal arranque o parametro em questão, daí estar aqui a ser executada a lista
    //de todos de todos os parametros 
    this.listEmployees();
    
  }

listEmployees(){
  this._employeeService.getEmployee().subscribe(
    data =>this.employees=this.filterEmployees(data),
  

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

  public downloadAsPDF() {
    let doc = new jsPDF('p', 'pt','a3',true);
    
    const pdfTable = this.pdfTable.nativeElement;

    doc.html(pdfTable,{
    callback:(doc)=>{
     doc.save('tableToPdf.pdf');
    }
    });

    
  }

}




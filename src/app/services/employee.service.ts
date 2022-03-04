import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../model/employee";
import { User } from "../model/user";
import { Router } from "@angular/router";
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

  export class EmployeeService {

    showMenu = new EventEmitter<boolean>();

     userAuthentication: boolean = false;

    private baseURL = "http://localhost:8080/api/v1/employees";


    constructor(private _httpClient: HttpClient,private router:Router) { } 

    getEmployee():Observable<Employee[]>{
        return this._httpClient.get<Employee[]>(this.baseURL).pipe(
            map(response=>response)
            
        );
    }

    createEmployee(employee:Employee):Observable<Object>{
      return this._httpClient.post(`${this.baseURL}`, employee)
      .pipe(map(response=>response));
    }

    getEmployeeById(id: number): Observable<Employee>{
      return this._httpClient.get<Employee>(`${this.baseURL}/${id}`);
    }

    updateEmployee(id: number, employee: Employee): Observable<Object>{
      return this._httpClient.put(`${this.baseURL}/${id}`, employee);
    }


    deleteEmployee(id:number):Observable<Object>{
      return this._httpClient.delete(`${this.baseURL}/${id}`);
    }

    loginUser(user:User){

      if(user.username==="joao@hotmail.com" && user.password==="123"){

        this.userAuthentication = true;

        this.showMenu.emit(true);

        this.router.navigate(['/employees']);
      }
      else {
        this.userAuthentication = false;
        
        this.showMenu.emit(false);
      }
     
    }
  userAuthenticated(){
    return this.userAuthentication;
}
    

  }
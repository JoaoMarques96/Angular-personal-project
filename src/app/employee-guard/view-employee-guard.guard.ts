import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class ViewEmployeeGuardGuard implements CanActivate {
  
  constructor(private _router:Router,
    private _employeeService :EmployeeService){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id= Number(route.paramMap.get('id'));
    if(isNaN(id) || id<1)  {
  
      alert('Invalid product id');
      this._router.navigate(['employees']);
      return false;
    
    }
      return true;

     
  }
  
}

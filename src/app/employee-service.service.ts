import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  

  baseURL="http://localhost:8081/api/employees"; 
  constructor(private httpClient: HttpClient) { }

  addEmployee(employee: Employee)
  {
    console.log(employee);
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  updateEmployee(employee: Employee)
  {
    console.log(employee);
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  deleteEmployee(eID: string)
  {
    console.log("you here")
    return this.httpClient.delete(`${this.baseURL}/${eID}`);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  getEmployeeById(eID: string): Observable<Employee> {
       return this.httpClient.get<Employee>(`${this.baseURL}/${eID}`);
       
  }

}

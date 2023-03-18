import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeServiceService, private router : Router){}

  ngOnInit(): void {
    
  }

  addEmployeeData(){
    this.employeeService.addEmployee(this.employee).subscribe(data=>{
        alert("Employee Data Inserted");
        this.redirectToList();

    },error=>alert("Insert Failed"))
  }

  redirectToList(){
    this.router.navigate(['/employee']);
  }

}


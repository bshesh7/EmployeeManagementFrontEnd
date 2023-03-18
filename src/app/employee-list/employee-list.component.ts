import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  constructor (private employeeService: EmployeeServiceService,private router : Router){}
  
  employees : Employee[] = [];
  
  
  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe(data=>{
      this.employees=data;
    })
  }

  updateEmployee(eID: string){
    console.log(eID);
    this.router.navigate(['update-employee',eID]);
  }

  deleteEmployee(eID: string){
    this.employeeService.deleteEmployee(eID).subscribe((res) => {
      console.log(res);
      window.location.reload();
      }, (err) => {
        console.log(err);
    });
  }

  

}

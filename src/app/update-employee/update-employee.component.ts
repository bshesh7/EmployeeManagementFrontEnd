import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  
  constructor(private acticeRouter: ActivatedRoute, private employeeService : EmployeeServiceService, private router : Router){}
  
  eid ! : string; 

  ngOnInit(): void {
    this.eid = this.acticeRouter.snapshot.params['eID'];
    console.log(this.eid); 
    this.employeeService.getEmployeeById(this.eid).subscribe(data=>{
      this.employee = data;
      console.log(this.employee);
    }) 

  }

  updateEmployeeData(){
      this.employeeService.updateEmployee(this.employee).subscribe(data=>{
        alert("Your Data Has Been Updated");
        this.router.navigate(['/employee']);
      })
  }

}

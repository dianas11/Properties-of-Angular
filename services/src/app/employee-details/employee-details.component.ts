import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.employees = this._employeeService.getEmployees();

    this._employeeService.getEmployees()
        .subscribe(data =>  this.employees = data,
          error => this.errorMsg = error);
  }

}

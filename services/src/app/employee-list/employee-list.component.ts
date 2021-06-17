import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // to fetch data from service
    //this.employees = this._employeeService.getEmployees();

    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
               error => this.errorMsg = error);
  }



}

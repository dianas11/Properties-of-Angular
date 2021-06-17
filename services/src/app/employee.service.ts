import { IEmployees } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  // getEmployees(): Observable<IEmployees[]> {
  //   return this.http.get<IEmployees[]>(this._url)
  //           .catchError(this.errorHandler);

  // }
  getEmployees(): Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this._url)
        .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
    
  }
}

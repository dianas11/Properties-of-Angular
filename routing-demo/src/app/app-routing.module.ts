import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent}, //id: is the placeholder for the route parameter
  {path: 'employees', component: EmployeeListComponent},
  {path:"**", component: PageNotFoundComponent}
];
//each route is nothing but an object and an object contains a path which is reflected in the url
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent,  DepartmentDetailComponent]

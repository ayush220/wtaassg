import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './components/add-employee/add-employee.component';
import { EditemployeeComponent } from './components/edit-employee/edit-employee.component';
import { employeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-employee' },
  { path: 'add-employee', component: AddemployeeComponent },
  { path: 'edit-employee/:id', component: EditemployeeComponent },
  { path: 'employee-list', component: employeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
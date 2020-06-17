import { employee } from './../../shared/employee';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class employeeListComponent implements OnInit {
  employeeData: any = [];
  dataSource: MatTableDataSource<employee>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'employee_name', 'employee_email', 'section', 'action'];

  constructor(private employeeApi: ApiService) {
    this.employeeApi.Getemployees().subscribe(data => {
      this.employeeData = data;
      this.dataSource = new MatTableDataSource<employee>(this.employeeData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteemployee(index: number, e){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.employeeApi.Deleteemployee(e._id).subscribe()
    }
  }

}
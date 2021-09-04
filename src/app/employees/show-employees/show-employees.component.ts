import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  EmployeeList:any=[];

  ModalTitle=""
  ActivateAddEditEmpComp:boolean=false;
  employees_ni:any;

  ngOnInit(): void {
    this.refreshEmpList();
    setTimeout(function () {
      $(function () {
        $('#dat-Table').DataTable();
      });
    }, 500);
  }

  addClick(){
    this.employees_ni={
      employeeId:0,
      employeeName:"",
      employeeDomain:"",
      domainPassword:"",
      employeeDep:"",
      employeeIP:"",
      employeePassword:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item: { EmployeeId: any; }){
    this.employees_ni=item;
    this.ModalTitle="Edit User";
    this.ActivateAddEditEmpComp=true;

  }

  deleteClick(item: { EmployeeId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteEmp(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}


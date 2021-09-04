import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-edit-employees',
  templateUrl: './add-edit-employees.component.html',
  styleUrls: ['./add-edit-employees.component.css']
})
export class AddEditEmployeesComponent implements OnInit {

  constructor(private service:UserService) { }

  @Input() employees_ni:any;

  employeeId:string | undefined;
  employeeName:string | undefined;
  employeeDomain:string | undefined;
  domainPassword:string | undefined;
  employeeDep:string | undefined;
  employeeIP:string | undefined;
  employeePassword:string | undefined;

  ngOnInit(): void {
    this.employeeId=this.employees_ni.employeeId;
    this.employeeName=this.employees_ni.employeeName;
    this.employeeDomain=this.employees_ni.employeeDomain;
    this.domainPassword=this.employees_ni.domainPassword;
    this.employeeDep=this.employees_ni.employeeDep;
    this.employeeIP=this.employees_ni.employeeIP;
    this.employeePassword=this.employees_ni.employeePassword;
  }

  addEmp(){
    var val = { employeeId:this.employeeId,
                employeeName:this.employeeName,
                employeeDomain:this.employeeDomain,
                domainPassword:this.domainPassword,
                employeeDep:this.employeeDep,
                employeeIP:this.employeeIP,
                employeePassword:this.employeePassword };
    this.service.addEmp(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmp(){
    var val = { employeeId:this.employeeId,
                employeeName:this.employeeName,
                employeeDomain:this.employeeDomain,
                domainPassword:this.domainPassword,
                employeeDep:this.employeeDep,
                employeeIP:this.employeeIP,
                employeePassword:this.employeePassword };
    this.service.updateEmp(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}


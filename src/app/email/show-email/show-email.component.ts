import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { uuid } from '../add-edit-email/uuid';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  EmailList:any=[];

  ModalTitle=""
  ActivateAddEditEmailComp:boolean=false;
  email_ni:any;
  dtOptions: DataTables.Settings = { };
  
  ngOnInit(): void {
    this.refreshEmailList();
    setTimeout(function () {
      $(function () {
        $('#dat-Table').DataTable();
      });
    }, 500);
  }

  addClick(){
    const tempId = uuid();
    this.email_ni={
      emailId:0,
      emailName:"",
      emailem:"",
      emailPass:tempId,
      department:"",
      branch:""
    }
    this.ModalTitle="Add Email";
    this.ActivateAddEditEmailComp=true;
    this.refreshEmailList();
  }

  editClick(item: { emailId: any; }){
    console.log(item);
    this.email_ni=item;
    this.ModalTitle="Edit Email";
    this.ActivateAddEditEmailComp=true;

  }

  deleteClick(item: { emailId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteEmail(item.emailId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmailList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmailComp=false;
    this.refreshEmailList();
  }

  refreshEmailList(){
    this.service.getEmail_List().subscribe(data=>{
      this.EmailList=data;
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}

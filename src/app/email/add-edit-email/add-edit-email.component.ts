import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-add-edit-email',
  templateUrl: './add-edit-email.component.html',
  styleUrls: ['./add-edit-email.component.css']
})
export class AddEditEmailComponent implements OnInit {

  constructor(private service: UserService) { }

  @Input() email_ni:any;

  emailId:string | undefined;
  emailName:string | undefined;
  emailem:string | undefined;
  emailPass:string | undefined;
  department:string | undefined;
  branch:string | undefined;
  randomstring:string | undefined;

  ngOnInit(): void {
    this.emailId=this.email_ni.emailId;
    this.emailName=this.email_ni.emailName;
    this.emailem=this.email_ni.emailem;
    this.emailPass=this.email_ni.emailPass;
    this.department=this.email_ni.department;
    this.branch=this.email_ni.branch;
  }


  addEmail(){
    var val = { emailId:this.emailId,
                emailName:this.emailName,
                emailem:this.emailem,
                emailPass:this.emailPass,
                department:this.department,
                branch:this.branch };
    this.service.addEmail(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  
  updateEmail(){
    var val = { emailId:this.emailId,
                emailName:this.emailName,
                emailem:this.emailem,
                emailPass:this.emailPass,
                department:this.department,
                branch:this.branch };
    this.service.updateEmail(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}

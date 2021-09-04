import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  AdminList:any=[];

  constructor(public service: UserService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.refreshAdminList();
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res:any) =>{
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        }else{
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed');
                //Username is already taken
                break;
        
              default:
                this.toastr.error('element.description','Registration failed');
                //Registration failed
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  refreshAdminList(){
    this.service.getAdmins().subscribe(data=>{
      this.AdminList=data;
    });
  }

}

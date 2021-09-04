import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api';

  formModel = this.fb.group({
    FullName :[''],
    UserName :['', [Validators.required, Validators.minLength(4)]],
    Password :['', [Validators.required, Validators.minLength(6)]]
  });

  register() {
    var body = {
      FullName: this.formModel.value.FullName,
      UserName: this.formModel.value.UserName,
      Password: this.formModel.value.Password
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }

  getAdmins():Observable<any[]>{
    return this.http.get<any>(this.BaseURI + '/Admin');
  }

  //THIS IS THE EMAIL API

  getEmail_List():Observable<any[]>{
    return this.http.get<any>(this.BaseURI+'/Emails');
  }

  addEmail(val:any){
    return this.http.post(this.BaseURI+'/Emails',val);
  }

  updateEmail(val:any){
    return this.http.put(this.BaseURI+'/Emails',val);
  }

  deleteEmail(val:any){
    return this.http.delete(this.BaseURI+'/Emails/'+val);
  }

   //THIS IS THE EMPLOYEE API
   getEmpList():Observable<any[]>{
    return this.http.get<any>(this.BaseURI+'/employees');
  }

  addEmp(val:any){
    return this.http.post(this.BaseURI+'/employees',val);
  }

  updateEmp(val:any){
    return this.http.put(this.BaseURI+'/employees',val);
  }

  deleteEmp(val:any){
    return this.http.delete(this.BaseURI+'/employees/'+val);
  }
  
}

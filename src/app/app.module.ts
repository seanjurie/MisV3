import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminsComponent } from './admins/admins.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EmailComponent } from './email/email.component';
import { AddEditEmailComponent } from './email/add-edit-email/add-edit-email.component';
import { ShowEmailComponent } from './email/show-email/show-email.component';
import {MatTableModule} from '@angular/material/table';
import { EmployeesComponent } from './employees/employees.component';
import { ShowEmployeesComponent } from './employees/show-employees/show-employees.component';
import { AddEditEmployeesComponent } from './employees/add-edit-employees/add-edit-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminsComponent,
    EmailComponent,
    AddEditEmailComponent,
    ShowEmailComponent,
    EmployeesComponent,
    ShowEmployeesComponent,
    AddEditEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    DataTablesModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), 
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

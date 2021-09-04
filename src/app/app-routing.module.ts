import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsComponent } from './admins/admins.component';
import { AuthGuard } from './auth/auth.guard';
import { EmailComponent } from './email/email.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'homepage', component:HomeComponent,canActivate:[AuthGuard] },
  { path:'admins', component:AdminsComponent,canActivate:[AuthGuard] },
  { path:'emails', component:EmailComponent, canActivate:[AuthGuard] },
  { path:'employees', component:EmployeesComponent, canActivate:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

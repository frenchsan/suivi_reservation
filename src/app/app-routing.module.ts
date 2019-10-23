import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

const routes: Routes = [
  {path: '',  redirectTo: '/login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sessionconsult', component: ReservationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

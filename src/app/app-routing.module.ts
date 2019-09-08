import { OperatorsDetailComponent } from './components/operators-detail/operators-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OperatorsComponent } from './components/operators/operators.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "operators", component: OperatorsComponent},
  {path: "dashboard", component: DashboardComponent},
  { path: 'detail/:id', component: OperatorsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

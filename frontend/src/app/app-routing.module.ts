import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversListComponent } from './pages/drivers-list/drivers-list.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/app-drivers-list', pathMatch: 'full'
  },
  {
    path: 'app-drivers-list', component: DriversListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ResidentListingComponent } from '../residents/components/resident-listing/resident-listing.component';
import { StaffListingComponent } from '../staffs/components/staff-listing/staff-listing.component';
import { ResidentFormComponent } from '../residents/components/resident-form/resident-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'residents/new',
        component: ResidentFormComponent
      },
      {
        path: 'residents/:id',
        component: ResidentFormComponent
      },
      {
        path: 'residents',
        component: ResidentListingComponent
      },
      {
        path: 'staffs',
        component: StaffListingComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard/residents'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}

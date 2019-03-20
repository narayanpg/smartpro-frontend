import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffListingComponent } from './components/staff-listing/staff-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [StaffListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    StaffListingComponent
  ]
})
export class StaffsModule { }

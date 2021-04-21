import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TeamComponent } from './team/team.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent, AddProductComponent, AddCategoriesComponent,
    TeamComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdminRoutingModule
  ],
  exports: [AddProductComponent, AddCategoriesComponent],

} )

export class AdminModule {}

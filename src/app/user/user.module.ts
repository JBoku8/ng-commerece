import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
declarations: [
  UserComponent,
  ProductDetailComponent
],
  imports: [
  CommonModule, 
  SharedModule, 
  UserRoutingModule,
 
],
})
export class UserModule {}

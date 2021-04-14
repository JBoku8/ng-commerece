import { NgModule } from '@angular/core';
import { StoreDesignComponent } from './store-design/store-design.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart.routing.module';

@NgModule({
  declarations: [StoreDesignComponent, AddCartComponent, CartComponent],
  imports: [HttpClientModule, CommonModule, ShoppingCartRoutingModule],
  providers: [],
  bootstrap: [],
  exports: [],
})
export class ShoppingCartModule {}

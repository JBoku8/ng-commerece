import { NgModule } from '@angular/core';
import { StoreDesignComponent } from './store-design/store-design.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [StoreDesignComponent, AddCartComponent, CartComponent ],
    imports: [
      HttpClientModule,
      CommonModule

    ],
    providers: [],
    bootstrap: [],
    exports: [StoreDesignComponent]
  })
  export class ShoppingCartModule {}
  
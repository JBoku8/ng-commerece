import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot({}, {}),
    SharedModule,
    ShoppingCartModule,
    CommonModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

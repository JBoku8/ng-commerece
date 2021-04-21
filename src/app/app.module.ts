import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { TeamMembersComponent  } from '../app/team-members/team-members.component'
// import { TeamMembersComponent } from './app/team-members/team-members.component';
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { ArticleCardsComponent } from './team-members/article-cards/article-cards.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firebaseConfig } from '../../firebaseConfig';

@NgModule({
  declarations: [AppComponent, TeamMembersComponent, ArticleCardsComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot( {}, {}),
    SharedModule,
    ShoppingCartModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


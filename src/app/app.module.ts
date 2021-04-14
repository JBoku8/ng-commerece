import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
// import { TeamMembersComponent } from './app/team-members/team-members.component';
import { TeamMembersComponent  } from '../app/team-members/team-members.component'
import { ProductDetailComponent } from './user/product-detail/product-detail.component';
import { ArticleCardsComponent } from './team-members/article-cards/article-cards.component';

@NgModule({
  declarations: [AppComponent, TeamMembersComponent, ArticleCardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot( {}, {}),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}


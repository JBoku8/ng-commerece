import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AdminRoutingModule } from './admin-routing.module';
import { TeamMembersComponent } from './team-members.component';
import { ArticleCardsComponent } from './article-cards/article-cards.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TeamMembersComponent,
    ArticleCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
  ]
})
export class AdminModule { }

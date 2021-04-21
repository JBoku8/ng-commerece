import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TeamComponent } from './team/team.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { AddProductComponent } from './add-product/add-product.component';




const routes: Routes = [
  { path: '', component: AdminComponent },
  {
    path: 'categories',
    component: AddCategoriesComponent,
  },
  {
    path: 'products',
    component: AddProductComponent,},
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

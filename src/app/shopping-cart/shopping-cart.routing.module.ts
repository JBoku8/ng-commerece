import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDesignComponent } from './store-design/store-design.component';

const routes: Routes = [{ path: '', component: StoreDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule {}

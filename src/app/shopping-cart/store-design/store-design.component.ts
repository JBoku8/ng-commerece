import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store-design',
  templateUrl: './store-design.component.html',
  styleUrls: ['./store-design.component.scss', '../cart/cart.component.scss'],
})
export class StoreDesignComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

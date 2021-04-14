import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shopping-cart/model/product.model';
import { ProductService } from 'src/app/shopping-cart/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = [];
  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((resp)=>{
      this.products = resp;
      console.log(this.products)
    });
  }


}

import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  

  product: Product = {
    name: '',
    price: null
  }

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price']

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Faz chamada do backend para obter a lista de produtos
    this.productService.read(this.product).subscribe(products => {
      this.products = products      
    })
  }

}

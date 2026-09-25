import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsImage = [
    { "ProductId": "p1", "ProductName": "Trà Mi", "Price": 100, "Image": "assets/h1.png" },
    { "ProductId": "p2", "ProductName": "Mạnh Tiến", "Price": 300, "Image": "assets/h2.png" },
    { "ProductId": "p3", "ProductName": "Châu Huân", "Price": 200, "Image": "assets/h3.png" },
  ];

  constructor() { }

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}
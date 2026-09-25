import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // === DỮ LIỆU BÀI CŨ CỦA BẠN ===
  products: Product[] = [
    { id: 1, name: "Coca", price: 15, image_link: "https://static.vecteezy.com/system/resources/thumbnails/044/307/959/small_2x/cola-soda-isolated-on-transparent-background-png.png" },
    { id: 2, name: "Pepsi", price: -10, image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQBIxIYvUNDgQoFz9kSPD7NIF39GJHrTni6jUstI1ew&s=10" },
    { id: 3, name: "Redbull", price: 20, image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBIErhlLPjiadVzOG6gth2TMe3GF1ssyeBI0kxnZxWg&s=10" },
    { id: 4, name: "Aqua", price: -17, image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlcmBMOWAhZ-crmzZkYNPbTQthdects9wPCKXNdsnrw&s=10" },
    { id: 5, name: "Lavie", price: 12, image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVH0ldgSGrKm4eGrXS6Csjqi0etNYHPd9NCuj3C68Rw&s=10" }
  ];

  // === DỮ LIỆU BÀI MỚI NÀY CỦA THẦY ===
  productsImage = [
    { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "/assets/h1.png" },
    { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "/assets/h2.png" },
    { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "/assets/h3.png" },
  ];

  constructor() { }

  
  getProductList() {
    return this.products;
  }

  filterProductListByPrice(min: number, max: number) {
    return this.products.filter(p => p.price >= min && p.price <= max);
  }

  // Các hàm của bài mới (để hết lỗi getProductDetail và getProductsWithImages)
  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: any) {
    return this.productsImage.find(x => x.ProductId == id);
  }
}
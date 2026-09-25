import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog';

@Component({
  selector: 'app-catalog',
  standalone: false, 
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent {
  public categories: any;

  constructor(private cService: CatalogService) {
    this.categories = this.cService.getCategories();
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-violation',
  templateUrl: './product-list-violation.component.html',
  styleUrls: ['./product-list-violation.component.scss'],
})
export class ProductListViolationComponent {
  public readonly products = [
    { name: 'Laptop', category: 'Electronics', price: 800 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'T-Shirt', category: 'Clothing', price: 20 },
    { name: 'Jeans', category: 'Clothing', price: 40 },
    { name: 'Blender', category: 'Home Appliances', price: 60 },
    { name: 'Microwave', category: 'Home Appliances', price: 100 },
  ];

  public readonly categories = [
    'All',
    'Electronics',
    'Clothing',
    'Home Appliances',
  ];
  public selectedCategory = 'All';

  filterProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(
      (product) => product.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  @Input() selectedCategory = 'All';

  products = [
    { name: 'Laptop', category: 'Electronics', price: 800 },
    { name: 'Smartphone', category: 'Electronics', price: 500 },
    { name: 'T-Shirt', category: 'Clothing', price: 20 },
    { name: 'Jeans', category: 'Clothing', price: 40 },
    { name: 'Blender', category: 'Home Appliances', price: 60 },
    { name: 'Microwave', category: 'Home Appliances', price: 100 },
  ];

  filterProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(
      (product) => product.category === this.selectedCategory
    );
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  @Input() selectedCategory: string = 'All';
  @Output() selectedCategoryChange = new EventEmitter<string>();
  public readonly categories = [
    'All',
    'Electronics',
    'Clothing',
    'Home Appliances',
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectedCategoryChange.emit(category);
  }
}

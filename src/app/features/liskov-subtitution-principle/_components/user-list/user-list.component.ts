import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent extends BaseComponent implements OnInit {
  fetchItem(): void {
    this.items = ['Item 1', 'Item 2', 'Item 3'];
  }

  ngOnInit(): void {
    this.fetchItem();
    this.displayItems();
  }
}

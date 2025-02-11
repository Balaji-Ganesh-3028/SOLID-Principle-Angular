import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  public placeOrder() {
    console.log('Order Placed');
  }

  public cancelOrder() {
    console.log('Order Cancelled');
  }

  public refundOrder() {
    console.log('Order Refunded');
  }
}

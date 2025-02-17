import { Injectable } from '@angular/core';
import { PaymentMethod } from '../../_models/payment-methods.models';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  public paymentMethod(paymentMethod: PaymentMethod, amount: number): void {
    paymentMethod.pay(amount);
  }
}

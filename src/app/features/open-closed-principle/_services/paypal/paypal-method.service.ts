import { Injectable } from '@angular/core';
import { PaymentMethod } from '../../_models/payment-methods.models';

@Injectable({
  providedIn: 'root',
})
export class PaypalMethodService implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paying ${amount} with PayPal`);
  }

  constructor() {}
}

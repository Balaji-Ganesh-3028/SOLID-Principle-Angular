import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  openClosedPrincipleConstants,
  openClosedPrincipleRoutingConstants,
} from './_constants';
import { PaymentService } from './_services/payment/payment.service';
import { CreaditCardMethodService } from './_services/credit-card/creadit-card-method.service';
import { PaypalMethodService } from './_services/paypal/paypal-method.service';
import { PaymentMethod } from './_models/payment-methods.models';

interface PaymethodInterface {
  pay(amount: number): void;
}

@Component({
  selector: 'app-open-closed-principle',
  templateUrl: './open-closed-principle.component.html',
  styleUrls: ['./open-closed-principle.component.scss'],
})
export class OpenClosedPrincipleComponent implements OnInit {
  public readonly OCP_CONSTANTS = openClosedPrincipleConstants;
  public readonly OCP_ROUTING_CONSTANTS = openClosedPrincipleRoutingConstants;
  public paymentService = inject(PaymentService);

  constructor() {
    this.paymentService.paymentMethod(new CreaditCardMethodService(), 100);
    this.paymentService.paymentMethod(new PaypalMethodService(), 200);
    this.paymentService.paymentMethod(new CreaditCardMethodService(), 100);
    this.paymentService.paymentMethod(new PaypalMethodService(), 200);
    this.paymentService.paymentMethod(new CreaditCardMethodService(), 100);
    this.paymentService.paymentMethod(new PaypalMethodService(), 500);
  }

  ngOnInit(): void {}
}

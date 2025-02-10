import { Component } from '@angular/core';
import { appConstants, appRoutingConstants } from './core/_constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'soild-principle';
  public readonly APP_CONSTANTS = appConstants;
  public readonly APP_ROUTES = appRoutingConstants;

  constructor() {
    console.log('App Component Loaded');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-single-responsibility-principle',
  templateUrl: './single-responsibility-principle.component.html',
  styleUrls: ['./single-responsibility-principle.component.scss'],
})
export class SingleResponsibilityPrincipleComponent {
  constructor() {
    console.log('Single Responsibility Principle Component Loaded');
  }
}

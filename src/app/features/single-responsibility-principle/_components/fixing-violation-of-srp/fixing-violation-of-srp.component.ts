import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fixing-violation-of-srp',
  templateUrl: './fixing-violation-of-srp.component.html',
  styleUrls: ['./fixing-violation-of-srp.component.scss'],
})
export class FixingViolationOfSrpComponent {
  public selectedCategory: string = 'All';
  public selectCategory = (category: string) => {
    this.selectedCategory = category;
  };
}

import { Component, inject } from '@angular/core';
import { NotifyService } from './_services/notify/notify.service';
import {
  dependencyInversionPrincipleConstants,
  dependencyInversionPrincipleImagesConstants,
} from './_constants';

@Component({
  selector: 'app-dependency-inversion-principle',
  templateUrl: './dependency-inversion-principle.component.html',
  styleUrls: ['./dependency-inversion-principle.component.scss'],
})
export class DependencyInversionPrincipleComponent {
  private notifyService = inject(NotifyService);
  public readonly DIP_CONSTANTS = dependencyInversionPrincipleConstants;
  public readonly DIP_IMAGE_CONSTANTS =
    dependencyInversionPrincipleImagesConstants;
  constructor() {
    this.notifyService.notify(
      'DependencyInversionPrincipleComponent: constructor'
    );
    this.notifyService.getUserList();
  }
}

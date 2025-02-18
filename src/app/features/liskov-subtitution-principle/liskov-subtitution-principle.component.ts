import { Component } from '@angular/core';
import {
  liskovSubtitutionPrincipleImagesConstants,
  liskovSubtitutionPrincipleConstants,
} from './_constants';

@Component({
  selector: 'app-liskov-subtitution-principle',
  templateUrl: './liskov-subtitution-principle.component.html',
  styleUrls: ['./liskov-subtitution-principle.component.scss'],
})
export class LiskovSubtitutionPrincipleComponent {
  public readonly LSP_CONSTANTS = liskovSubtitutionPrincipleConstants;
  public readonly LSP_IMAGE_CONSTANTS =
    liskovSubtitutionPrincipleImagesConstants;
}

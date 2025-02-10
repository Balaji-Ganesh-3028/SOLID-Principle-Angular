import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiskovSubtitutionPrincipleComponent } from './liskov-subtitution-principle.component';

const routes: Routes = [{ path: '', component: LiskovSubtitutionPrincipleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiskovSubtitutionPrincipleRoutingModule { }

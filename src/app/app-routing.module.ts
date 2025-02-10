import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingConstants } from './core/_constants';

const routes: Routes = [
  {
    path: appRoutingConstants.SINGLE_RESPONSIBILITY_PRINCIPLE.WITHOUTSLASH,
    loadChildren: () =>
      import(
        './features/single-responsibility-principle/single-responsibility-principle.module'
      ).then((m) => m.SingleResponsibilityPrincipleModule),
  },
  {
    path: appRoutingConstants.OPEN_CLOSED_PRINCIPLE.WITHOUTSLASH,
    loadChildren: () =>
      import(
        './features/open-closed-principle/open-closed-principle.module'
      ).then((m) => m.OpenClosedPrincipleModule),
  },
  {
    path: appRoutingConstants.LISKOV_SUBSTITUTION_PRINCIPLE.WITHOUTSLASH,
    loadChildren: () =>
      import(
        './features/liskov-subtitution-principle/liskov-subtitution-principle.module'
      ).then((m) => m.LiskovSubtitutionPrincipleModule),
  },
  {
    path: appRoutingConstants.INTERFACE_SEGREGATION_PRINCIPLE.WITHOUTSLASH,
    loadChildren: () =>
      import(
        './features/interface-segregation-principle/interface-segregation-principle.module'
      ).then((m) => m.InterfaceSegregationPrincipleModule),
  },
  {
    path: appRoutingConstants.DEPENDENCY_INVERSION_PRINCIPLE.WITHOUTSLASH,
    loadChildren: () =>
      import(
        './features/dependency-inversion-principle/dependency-inversion-principle.module'
      ).then((m) => m.DependencyInversionPrincipleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

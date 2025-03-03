import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './shared/materials/materials.module';
import { SingleResponsibilityPrincipleModule } from './features/single-responsibility-principle/single-responsibility-principle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    SingleResponsibilityPrincipleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

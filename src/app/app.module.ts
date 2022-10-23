import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapasModule } from './mapas/mapas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

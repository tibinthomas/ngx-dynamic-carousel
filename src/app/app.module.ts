import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NgxDynamicCarouselModule } from 'ngx-dynamic-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDynamicCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

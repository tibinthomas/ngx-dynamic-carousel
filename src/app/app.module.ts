import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { NgxDynamicCarouselModule } from 'ngx-dynamic-carousel';

import { NgxDynamicCarouselModule } from '../../projects/ngx-dynamic-carousel/src/lib/ngx-dynamic-carousel.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDynamicCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

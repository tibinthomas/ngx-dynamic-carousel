import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDynamicCarouselComponent } from './ngx-dynamic-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    NgxDynamicCarouselComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgxDynamicCarouselComponent
  ]
})
export class NgxDynamicCarouselModule { }

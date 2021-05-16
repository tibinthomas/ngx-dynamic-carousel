import { Component, Input, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';


export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('2s', style({ opacity: 1 }))
])

export const scaleIn = animation([
  style({ opacity: 0, transform: "scale(0.5)" }),
  animate('2s', style({ opacity: 1, transform: "scale(1)" }))
])

@Component({
  selector: 'ngx-dynamic-carousel',
  templateUrl: './ngx-dynamic-carousel.component.html',
  styles: [
    `
    .disabled {
      pointer-events: none;
      opacity: 50%
    }
    `
  ],
  animations: [
    trigger('animationTrigger', [
      transition('void=>scale', [
        useAnimation(scaleIn)
      ]),
      transition('void=>fade', [
        useAnimation(fadeIn)
      ]),
    ]),
  ]
})
export class NgxDynamicCarouselComponent implements OnInit {
  
  constructor() { }
  
  @Input() mainContentTemplate!: TemplateRef<any>;
  @Input() leftArrowTemplate!: TemplateRef<any>;
  @Input() rightArrowtemplate!: TemplateRef<any>;
  @Input() items: Array<any> = [];
  @Input() animationState: 'fade'|'scale'|'custom' = 'fade';
  
  @Input() visibleCount = 1;

  firstIndex = 0;
  lastIndex = this.visibleCount - 1;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.lastIndex = changes?.visibleCount.currentValue - 1;
  }

  right() {
    this.firstIndex = this.firstIndex + 1;
    this.lastIndex = this.lastIndex + 1;
  }

  left() {
    this.firstIndex = this.firstIndex - 1;
    this.lastIndex = this.lastIndex - 1;
  }

  trackByFn() {
    return Math.random();
  }
}

import { Component, Input, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

import { animate, keyframes, style, transition, trigger } from '@angular/animations';

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
    trigger('cardAnimator', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1000ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({opacity: 0}))
      ])
    ])
  ]
})
export class NgxDynamicCarouselComponent implements OnInit {
  constructor() { }

  @Input() mainContentTemplate!: TemplateRef<any>;
  @Input() leftArrowTemplate!: TemplateRef<any>;
  @Input() rightArrowtemplate!: TemplateRef<any>;
  @Input() items: Array<any> = [];

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
}

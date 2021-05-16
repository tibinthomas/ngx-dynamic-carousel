import { Component, Input, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

import { animate, group, keyframes, style, transition, trigger } from '@angular/animations';

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
        style({display: 'none'}),
        animate('10000ms ease-in', keyframes([
          style({display: 'block', offset: 0.5}),
          style({opacity: 0, offset: 0.5}),
          style({opacity: 1, offset: 1})
        ])),
      ]),
      transition(':leave', [
        animate('5000ms ease-out', style({opacity: 0}))
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

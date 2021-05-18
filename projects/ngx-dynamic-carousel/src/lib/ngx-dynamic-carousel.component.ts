import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('2s', style({ opacity: 1 })),
]);

export const scaleIn = animation([
  style({ opacity: 0, transform: 'scale(0.5)' }),
  animate('2s', style({ opacity: 1, transform: 'scale(1)' })),
]);

@Component({
  selector: 'ngx-dynamic-carousel',
  templateUrl: './ngx-dynamic-carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .disabled {
        pointer-events: none;
        opacity: 50%;
      }
    `,
  ],
  animations: [
    trigger('animationTrigger', [
      transition('void=>scale', [useAnimation(scaleIn)]),
      transition('void=>fade', [useAnimation(fadeIn)]),
    ]),
  ],
})
export class NgxDynamicCarouselComponent implements OnInit, AfterViewInit {
  constructor(private cdRef: ChangeDetectorRef) {}

  @Input() mainContentTemplate!: TemplateRef<any>;
  @Input() leftArrowTemplate!: TemplateRef<any>;
  @Input() rightArrowtemplate!: TemplateRef<any>;
  @Input() items: Array<any> = [];
  @Input() animationState: 'fade' | 'scale' | 'custom' = 'fade';
  @Input() autoPlayInterval: number = 0;

  @Input() visibleCount = 1;

  firstIndex!: number;
  lastIndex!: number;



  ngOnInit(): void {
    this.resetIndex();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.lastIndex = changes?.visibleCount.currentValue - 1;
  }

  ngAfterViewInit() {
    if (this.autoPlayInterval) {
      setInterval(() => {
        this.loop('right');
        this.cdRef.markForCheck();
      }, this.autoPlayInterval)
    }
  }

  right() {
    this.firstIndex = this.firstIndex + 1;
    this.lastIndex = this.lastIndex + 1;
  }

  left() {
    this.firstIndex = this.firstIndex - 1;
    this.lastIndex = this.lastIndex - 1;
  }

  loop(direction: 'left' | 'right') {
    if (direction === 'left') {
      if (this.firstIndex !== 0) {
        this.left();
      } else {
        this.firstIndex = this.items.length - this.visibleCount;
        this.lastIndex = this.items.length - 1;
      }
    } else {
      if (this.lastIndex !== this.items.length - 1) {
        this.right();
      } else {
        this.resetIndex()
      }
    }
  }

  resetIndex() {
    this.firstIndex = 0;
    this.lastIndex = this.visibleCount - 1;
  }

  trackByFn() {
    return Math.random();
  }
}

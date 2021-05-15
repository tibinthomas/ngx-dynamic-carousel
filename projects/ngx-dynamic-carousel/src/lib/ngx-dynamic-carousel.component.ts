import { Component, Input, OnInit, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-dynamic-carousel',
  templateUrl: './ngx-dynamic-carousel.component.html',
  styles: [
  ]
})
export class NgxDynamicCarouselComponent implements OnInit {

  constructor() { }

  @Input() template!: TemplateRef<any>;
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

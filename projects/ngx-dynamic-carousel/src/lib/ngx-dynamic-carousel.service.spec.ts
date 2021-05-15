import { TestBed } from '@angular/core/testing';

import { NgxDynamicCarouselService } from './ngx-dynamic-carousel.service';

describe('NgxDynamicCarouselService', () => {
  let service: NgxDynamicCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

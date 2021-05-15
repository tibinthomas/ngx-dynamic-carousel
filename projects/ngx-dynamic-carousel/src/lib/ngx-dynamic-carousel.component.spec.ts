import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDynamicCarouselComponent } from './ngx-dynamic-carousel.component';

describe('NgxDynamicCarouselComponent', () => {
  let component: NgxDynamicCarouselComponent;
  let fixture: ComponentFixture<NgxDynamicCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDynamicCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDynamicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

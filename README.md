# ngx-dynamic-carousel

The ngx-dynamic-carousel library is a carousel component built using Angular.

## Installation

To install this library, run:

```bash
$ npm i ngx-dynamic-carousel --save
```

## Using this library

From your Angular `AppModule`:

```typescript
import { NgxDynamicCarouselModule } from "ngx-dynamic-carousel";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { NoopAnimationsModule }  "@angular/platform-browser/animations";
// BrowserAnimationsModule or NoopAnimationsModule is mandatory.

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxDynamicCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Once the library is imported, you can use its component in your Angular application:

```xml
<ngx-dynamic-carousel
  [mainContentTemplate]="mainContentTemplate"
  [leftArrowTemplate]="leftArrowTemplate" 
  [rightArrowtemplate]="rightArrowTemplate" 
  [items]="items" 
  [visibleCount]="1"
  [animationState]="'fade'"
  >
  
  <!-- main content template starts here -->
  <ng-template let-item #mainContentTemplate>
    <div class="p-4 border border-gray-500">
      <img [src]="item.imageUrl">
      <span class="font-semibold">
        {{ item.name }}
      </span>
    </div>
  </ng-template>
  <!-- main content template ends here -->

<!-- Left arrow template starts -->
  <ng-template #leftArrowTemplate>Left</ng-template>
<!-- Left arrow template ends -->

<!-- Right arrow template starts -->
  <ng-template #rightArrowTemplate>Right</ng-template>
  <!-- Right arrow template ends -->

</ngx-dynamic-carousel>
```

## Available options

|       Option        | Default value |                                                              Description                                                               | Example value                                                                  |
| :-----------------: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------ |
| mainContentTemplate |    _none_     |                               (Required) The main content template defines the template of the carousel.                               | Refer #mainContentTemplate in the above example                                |
|        items        |    _none_     |                   It is an array of objects that should contain all the values that is to be binded in the template                    | In the example above, the imageUrl and name are keys that are passed via items |
|    visibleCount     |      _1_      |                                   The number of _mainContentTemplate_ that must be appeared in the carousel at a time                                   | _4_ (Four images will be dislpayed at one stretch)                             |
|  leftArrowTemplate  |     _<-_      |                                 It is a template to define the left navigation symbol of the carousel                                  | _Left_                                                                         |
| rightArrowTemplate  |     _->_      |                                 It is a template to define the right navigation symbol of the carousel                                 | _Right_                                                                        |
|   animationState    |    _fade_     | The animationState can take the values _fade_, _scale_ or _custom_. If the _custom_ is set, then the user can customize the animation. | In the above example it is set as _fade_                                       |

## Custom Animation

To give custom animation, set animationState property to _custom_. Now you can pass the animation trigger with the mainContentTemplate.
## License

MIT © Tibin && Fenn

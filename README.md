# ngx-dynamic-carousel

The ngx-dynamic-carousel library is a carousel component built using angular.

## Installation

To install this library, run:

```bash
$ npm i ngx-dynamic-carousel --save
```

## Using this library

From your Angular `AppModule`:

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { NgxDynamicCarouselModule } from "../../projects/ngx-dynamic-carousel/src/lib/ngx-dynamic-carousel.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
<!-- You can now use ngx-dynamic-carousel component in app.component.html -->
<ngx-dynamic-carousel [mainContentTemplate]="mainContentTemplate" [items]="items" [visibleCount]="1"
  [leftArrowTemplate]="leftArrowTemplate" [rightArrowtemplate]="rightArrowTemplate" [animationState]="'fade'">
  <ng-template let-item #mainContentTemplate>
    <div class="p-4 border border-gray-500">
      <img [src]="item.imageUrl">
      <span class="font-semibold">
        {{ item.name }}
      </span>
    </div>
  </ng-template>
  <ng-template #leftArrowTemplate>Left</ng-template>
  <ng-template #rightArrowTemplate>Right</ng-template>
</ngx-dynamic-carousel>
```

## Available options

|       Option        | Default value |                                                              Description                                                               | Example value                                                                  |
| :-----------------: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------ |
| mainContentTemplate |    _none_     |                               (Required) The main content template defines the template of the carousel.                               | Refer #mainContentTemplate in the above example                                |
|        items        |    _none_     |                   It is an array of objects that should contain all the values that is to be binded in the template                    | In the example above, the imageUrl and name are keys that are passed via items |
|    visibleCount     |      _1_      |                                   The number of images that must be appeared in the screen at a time                                   | _4_ (Four images will be dislpayed at one stretch)                             |
|  leftArrowTemplate  |     _<-_      |                                 It is a template to define the left navigation symbol of the carousel                                  | _Left_                                                                         |
| rightArrowTemplate  |     _->_      |                                 It is a template to define the right navigation symbol of the carousel                                 | _Right_                                                                        |
|   animationState    |    _fade_     | The animationState can take the values _fade_, _scale_ or _custom_. If the _custom_ is set, then the user can customize the animation. | In the above example it is set as _fade_                                       |

## License

MIT ©

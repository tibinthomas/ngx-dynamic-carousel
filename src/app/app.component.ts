import { animate, animation, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';


export const fadeIn=animation([
  style({opacity:0}),
  animate('2s',style({opacity:1}))
])

export const scaleIn=animation([
  style({opacity:0,transform:"scale(0.5)"}),
  animate('2s',style({opacity:1,transform:"scale(1)"}))
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('scaleTrigger', [
      transition('void=>*',[
        useAnimation(scaleIn)
       ]),
    ]),
    trigger('fadeTrigger', [
      transition('void=>*',[
        useAnimation(fadeIn)
       ]),
    ])
  ]
})
export class AppComponent {
  items = Array.from(Array(10), () => ({ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: Math.random(), age: Math.random() }));

}

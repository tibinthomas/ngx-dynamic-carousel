import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = Array.from(Array(10), () => ({ imageUrl: 'https://picsum.photos/seed/picsum/200/300', name: Math.random(), age: Math.random() }));

}

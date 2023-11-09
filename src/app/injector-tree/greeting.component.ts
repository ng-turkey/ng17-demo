import { Component, inject } from '@angular/core';
import { NAME } from './injector-tree.component';

@Component({
  selector: 'app-greeting',
  standalone: true,
  template: '<h1>Hello {{name}}</h1>',
})
export class GreetingComponent {
  name = inject(NAME);
}

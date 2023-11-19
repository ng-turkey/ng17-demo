import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-demo',
  template: `<p>Lazy loaded demo component</p>`,
})
export class DemoComponent {
  @Input() user: any;
  
  constructor() {
    for (let index = 0; index < 10000; index++) {
      console.log(index);
    }
  }
}

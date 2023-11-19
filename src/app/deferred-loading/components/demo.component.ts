import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-demo',
  template: `<p>Lazy loaded demo component</p>`,
})
export class DemoComponent {
  @Input() user: any;
  
  constructor() {
    // console.log(this.user.name);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-text',
  template: '<p> {{text}} </p>',
})
export class TextComponent {
  @Input({ required: true }) text!: string;
}

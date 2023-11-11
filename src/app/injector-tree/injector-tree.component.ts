import { Component, InjectionToken } from '@angular/core';
import { GreetingComponent } from './greeting.component';

export const NAME = new InjectionToken<string>('Name');

@Component({
  selector: 'injector-tree',
  template: `
    <div>
      <app-greeting />
    </div>
  `,
  providers: [
    {
      provide: NAME,
      useValue: 'NgTurkey',
    },
  ],
  styles: `
    :host {
      display: block;
      padding: 1rem 2rem;
    }
  `,
  imports: [GreetingComponent],
  standalone: true,
})
export default class InjectorTreeComponent {}

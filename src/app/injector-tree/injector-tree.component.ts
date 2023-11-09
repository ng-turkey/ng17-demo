import { Component, forwardRef, InjectionToken } from '@angular/core';
import { GreetingComponent } from './greeting.component';

export const NAME = new InjectionToken<string>('Name');

@Component({
  selector: 'injector-tree',
  template: `
    <app-greeting />
    <injector-tree-child />
  `,
  providers: [
    {
      provide: NAME,
      useValue: 'NgTurkey',
    },
  ],
  imports: [GreetingComponent, forwardRef(() => InjectorTreeChildComponent)],
  standalone: true,
})
export default class InjectorTreeComponent {}

@Component({
  selector: 'injector-tree-child',
  template: '<app-greeting />',
  imports: [GreetingComponent],
  standalone: true,
  providers: [
    {
      provide: NAME,
      useValue: 'Rast Mobile',
    },
  ],
})
export class InjectorTreeChildComponent {}

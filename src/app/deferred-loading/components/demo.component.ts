import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, startWith } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-demo',
  template: `<p>Timer: {{ interval$ | async }}</p>`,
  imports: [AsyncPipe],
})
export class IntervalComponent {
  interval$ = interval(5000).pipe(startWith(0));
}

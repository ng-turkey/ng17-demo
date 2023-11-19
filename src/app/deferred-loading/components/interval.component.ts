import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, startWith } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-interval',
  template: `<p>Interval: {{ interval$ | async }}</p>`,
  imports: [AsyncPipe],
})
export class IntervalComponent {
  interval$ = interval(1000).pipe(startWith(0), takeUntilDestroyed());
}

import { CommonModule } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { of } from 'rxjs';

@Component({
  standalone: true,
  templateUrl: './control-flow.component.html',
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export default class ControlFlowComponent {
  isAdmin = true;
  isAdmin$ = of(true);
  userType: 'admin' | 'staff' | 'moderator' = 'admin';

  fruits = ['apple', 'banana', 'mango', 'lime'];

  fruitsTrackBy: TrackByFunction<string> = (_, fruit) => fruit;
}

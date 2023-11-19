import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserComponent } from './user.component';


/**
 * Not working on SSR
 * https://github.com/angular/angular/discussions/50716 - Server Side Rendering Behavior
 */
@Component({
  standalone: true,
  selector: 'app-deferred-loading',
  templateUrl: './deferred-loading.component.html',
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    UserComponent
  ],
})
export default class DeferredLoadingComponent {
  showDetail = false;
  items = [...Array(150).keys()];
}

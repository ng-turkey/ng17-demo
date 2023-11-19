import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { DemoComponent } from './components/demo.component';
import DefaultComponent from './components/default.component';
import { UserComponent } from './components/user.component';

/**
 * Not working on SSR
 * https://github.com/angular/angular/discussions/50716 - Server Side Rendering Behavior
 */
@Component({
  standalone: true,
  selector: 'app-deferred-loading',
  templateUrl: './deferred-loading.component.html',
  styles: `.image{
    height: 200px;
    background: black;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
  }`,
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    DemoComponent,
    DefaultComponent,
    UserComponent,
  ],
})
export default class DeferredLoadingComponent {
  showDetail = false;
  showDefaultComponent = false;
  items = [...Array(150).keys()];
}

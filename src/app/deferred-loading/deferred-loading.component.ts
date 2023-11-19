import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import { IntervalComponent } from './components/interval.component';
import DefaultComponent from './components/default.component';
import { UserComponent } from './components/user.component';
import { TextComponent } from './components/text.component';
import { NgOptimizedImage } from '@angular/common';
import { SCAMTextComponentModule } from './components/scam-text.component';
import { MyImageComponent } from './components/image.component';

/**
 * Not working on SSR
 * https://github.com/angular/angular/discussions/50716 - Server Side Rendering Behavior
 */
@Component({
  standalone: true,
  selector: 'app-deferred-loading',
  templateUrl: './deferred-loading.component.html',
  styleUrl: './deferred-loading.component.scss',
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
    TextComponent,
    MatCardModule,
    SCAMTextComponentModule,
    MyImageComponent,
    NgOptimizedImage,
    MatTabsModule,
    MatExpansionModule,
    IntervalComponent,
    DefaultComponent,
    UserComponent,
  ],
})
export default class DeferredLoadingComponent {
  showDetail = false;
  showDefaultComponent = false;
  items = [...Array(150).keys()];

  condition = false;
}

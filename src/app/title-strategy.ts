import { EnvironmentProviders, inject, Injectable, makeEnvironmentProviders } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
class NgTurkeyTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  override updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`Ng Turkey | ${title}`);
    }
  }
}

export function provideNgTurkeyTitleStrategy(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: TitleStrategy,
      useExisting: NgTurkeyTitleStrategy,
    },
  ]);
}

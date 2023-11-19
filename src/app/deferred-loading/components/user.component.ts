import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `<pre>{{ user() | json }}</pre>`,
  imports: [JsonPipe],
})
export class UserComponent {
  readonly #http = inject(HttpClient);
  readonly #url = 'https://jsonplaceholder.typicode.com/users/1';

  user = toSignal(this.#http.get(this.#url));
}

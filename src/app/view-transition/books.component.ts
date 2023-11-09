import { Component, inject } from '@angular/core';
import { BooksService } from './books.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: 'books.component.html',
  styleUrl: './books.component.scss',
  standalone: true,
  imports: [AsyncPipe, NgFor, MatButtonModule, RouterLink],
})
export default class BooksComponent {
  readonly books$ = inject(BooksService).getBooks();
}

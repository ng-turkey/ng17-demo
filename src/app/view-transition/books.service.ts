import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

export interface Book {
  id: string;
  title: string;
  img: string;
  author: string;
  viewTransitionName: string;
}

const MOCK: Array<Book> = [
  {
    id: 'clean-code',
    title: 'Clean Code: A handbook of Agile Software Craftsmanship',
    img: '/assets/images/clean-code.png',
    author: 'Robert C. Martin',
  },
  {
    id: 'introducing-git',
    title: 'Introducing Github: A Non-Technical Guide',
    img: '/assets/images/introducing-github.png',
    author: 'Miguel Angel Durán',
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: '/assets/images/the-clean-coder.png',
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: '/assets/images/javascript-the-good-parts.png',
    author: 'Douglas Crockford',
  },
].map((b) => {
  return {
    ...b,
    viewTransitionName: `view-transition-name: book-${b.id}`,
  };
});

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  getBooks(): Observable<Array<Book>> {
    return of(MOCK);
  }

  getById(id: string): Observable<Book> {
    return of(MOCK).pipe(map((books) => books.find((book) => book.id === id)!));
  }
}

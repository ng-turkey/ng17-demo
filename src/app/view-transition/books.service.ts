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
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1436202607i/3735293.jpg',
    author: 'Robert C. Martin',
  },
  {
    id: 'introducing-git',
    title: 'Introducing Github: A Non-Technical Guide',
    img: 'https://m.media-amazon.com/images/I/91jo2OWqiGL._SL1500_.jpg',
    author: 'Miguel Angel Durán',
  },
  {
    id: 'the-clean-coder',
    title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
    img: 'https://m.media-amazon.com/images/I/61GHrDrumhL._SL1000_.jpg',
    author: 'Robert C. Martin',
  },
  {
    id: 'javascript-the-good-parts',
    title: 'JavaScript: The Good Parts',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1328834793i/2998152.jpg',
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

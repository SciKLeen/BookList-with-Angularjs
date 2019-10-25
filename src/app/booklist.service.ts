import { Injectable, DefaultIterableDiffer } from '@angular/core';
import { listbooks } from './Databook';
import { Books } from './books';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }
  books: Books[] = listbooks.filter(x => x.no !== null);

  getBooks(): Observable<Books[]> {
    return of(this.books);
  }
  getBook(id) {
    this.books.forEach(book => {
        if (book.no === id) {
            return book;
        }
    });
    return null;
  }
  addBook(obj) {
    this.books.push(obj);
  }
  editBook(id, obj) {
    this.books[id] = obj;
  }
  getSize() {
    return this.books.length;
  }
  __default() {
    return ;
  }
  getDefault() {
      return listbooks;
  }
}

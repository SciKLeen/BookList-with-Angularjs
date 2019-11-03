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
  // books: Books[] = localStorage.getItem('books') === null ? [] : 
  //                   JSON.parse(localStorage.getItem('books') );

  getBooks(): Observable<Books[]> {
    return of(JSON.parse(localStorage.getItem('books')));
  }
  getBook(id) {
    // this.books = JSON.parse(localStorage.getItem('books'));
    console.log("add .")
    this.books.forEach(book => {
        if (book.no === id) {
            return book;
        }
    });
    return this.books;
  }
  addBook(obj) {
    console.log("add . ")
    this.books.push(obj);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
  editBook(id, obj) {
    this.books[id] = obj;
    localStorage.setItem('books', JSON.stringify(this.books));
  }
  getSize() {
    return this.books.length;
  }
  getDefault() {
      return listbooks;
  }
}

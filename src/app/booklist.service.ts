import { Injectable, DefaultIterableDiffer } from '@angular/core';
import { listbooks } from './Databook';
import { Books } from './books'

import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class BookService {
  constructor() { }

//   bookdefault:Books[] = listbooks
  books:Books[] = listbooks.filter(x=>x.no !== null);

  getBooks():Observable<Books[]>{
    return of(this.books);
  }
  getBook(id){
    this.books.forEach(book => {
        if(book.no === id){
            return book;
        } 
    });
    return null;

  }

  addBook(obj){
    this.books.push(obj);
    // console.log(this.books)
    // console.log(this.bookdefault)
  }
  editBook(id, obj){
    this.books[id] = obj;
  }
  getSize(){
    return this.books.length;
  }

  __default(){
    return ;
  }

  getDefault(){

    //   console.log("bookdefault", this.bookdefault);
    //   this.bookdefault[0].no = 4;
    //   console.log("books", this.books);
    //   this.books = listbooks;
      return listbooks;
  }
}
import { Injectable } from '@angular/core';
import { listbooks } from './Databook';
import { Books } from './books'

//get data asynchoronously with Observable
import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  lstbook:Books[] = listbooks

  constructor() { }
    getBooks():Observable<Books[]>{
        return of(this.lstbook);
    }
    addbook(obj){
        this.lstbook.push(obj)
    }

    editBook(id, obj){
        this.lstbook[id] = obj
    }

    getSize(){
        return this.lstbook.length
    }
}
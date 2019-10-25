import { Component, OnInit, Output } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../booklist.service';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookediter',
  templateUrl: './bookediter.component.html',
  styleUrls: ['./bookediter.component.scss']
})
export class BookediterComponent implements OnInit {

  constructor(
    private bookservice:BookService,
    private location:Location,
    private route:ActivatedRoute
  ) { }
  id = parseInt(this.route.snapshot.paramMap.get('id'))
  title = !this.id ? "Add": "Edit";

  field = ["Type", "Name", "Author", "Rating"]

  book = new Books(-1, "", "", "", 0)

  listbook : Books[]

  ngOnInit() {
    if(this.id){
      console.log()
      this.bookservice.getBooks().subscribe(
        (book) =>{
          this.listbook = book;
        }
      )
      this.book.no = this.listbook[this.id - 1].no
      this.book.type = this.listbook[this.id - 1].type
      this.book.name = this.listbook[this.id - 1].name
      this.book.author = this.listbook[this.id - 1].author
      this.book.rating = this.listbook[this.id - 1].rating
    }
  }
  selectedValues = true
  rating: number = 2;




  // @Output() newItemEvent = new EventEmitter<string>();

  addBook(){
    console.log(this.id)

    if(!this.id)
    {
      this.book.no = this.bookservice.getSize() + 1
      // this.listbook.push(this.book)
      this.bookservice.addBook(this.book)
    }
    else{
      this.book.no = this.id
      this.bookservice.editBook(this.id - 1, this.book)
    }
    this.location.back()
  }
}

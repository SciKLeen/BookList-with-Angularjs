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
  title = "ADD";

  field = ["Type", "Name", "Author", "Rating"]

  book = new Books(-1, "", "", "", 0)


  ngOnInit() {
    
  }
  selectedValues = true
  
  rating: number = 2;




  // @Output() newItemEvent = new EventEmitter<string>();

  addBook(){

    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)

    if(!id)
    {
      this.book.no = this.bookservice.getSize() + 1
      this.bookservice.addbook(this.book)
    }
    else{
      this.book.no = id - 1
      this.bookservice.editBook(id - 1, this.book)
    }
    this.location.back()
  }
}

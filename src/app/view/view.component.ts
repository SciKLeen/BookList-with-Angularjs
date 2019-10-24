import { Component, OnInit} from '@angular/core';
import { Books } from '../books'
import { BookService } from '../booklist.service';
import { Location } from '@angular/common'
// import { listenerCount } from 'cluster';

@Component({
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  constructor(
    private bookservice:BookService,
    private location:Location
  ) { }
  
  lstbook : Books[]
  books : Books[];
  cols : any[]

  ngOnInit() {
    this.bookservice.getBooks().subscribe(
      (book) =>{
        this.lstbook = book;
      }
    )
    this.books = this.lstbook
  }

  // ---------------------------------- field ---------------------------------- //
  fields = ['No', "Type", "Name", "Author", "Rating"]
  typeBook: string[] = ['SGK', 'English', "Novel"];
  // ------------------------------- List checkbox ----------------------------------- //
  bookType = {SGK: true, English: true, Novel: true};

  show(){
    console.log(this.books)
  }

  searchTable(search){
    var lst = [];

    this.lstbook.forEach(element => {
      search = search.toLowerCase()
      var name = element.name.toLowerCase()
      var author = element.author.toLowerCase()
      if(search === "" 
          || name.includes(search) 
          || author.includes(search)
      ){
        if(  (this.bookType.SGK && element.type === "SGK")
          || (this.bookType.English && element.type === "English")
          || (this.bookType.Novel && element.type === "Novel")
          ){
            lst.push(element)
          }  
      }
    });
    this.books = lst
  }
  editBook(){
    this.location.go("/bookediter/")
  }

}

import { Component, OnInit} from '@angular/core';
import { Books } from '../books'
import { BookService } from '../booklist.service';
import { Location } from '@angular/common'

@Component({
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  constructor(
    private bookservice: BookService,
    private location: Location
  ) { }

  lstbook: Books[];
  books: Books[];
  cols: any[];

  ngOnInit() {
    this.bookservice.getBooks().subscribe(
      (book) =>{
        this.lstbook = book;
      }
    )
    this.books = this.lstbook

    this.cols = [
      { field: 'no', header: 'No' },
      { field: 'type', header: 'Type' },
      { field: 'name', header: 'Name' },
      { field: 'author', header: 'Author' },
      { field: 'rating', header: 'Rating' }
    ];
  }

  // ---------------------------------- field ---------------------------------- //
  fields = ['No', 'Type', 'Name', 'Author', 'Rating'];
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
          ) {
            lst.push(element);
          }
      }
    });
    this.books = lst;
  }
  editBook(){
    this.location.go('/bookediter/')
  }
  resert() {
    this.books = this.bookservice.getDefault()
  }
}
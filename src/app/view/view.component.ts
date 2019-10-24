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

  books:Books[];
  ngOnInit() {
    this.bookservice.getBooks().subscribe(
      (book) =>{
        this.books = book;
      }
    )
  }

  // booklst = this.books;

  // ---------------------------------- field ---------------------------------- //
  fields = ['No', "Type", "Name", "Author", "Rating"]
  typeBook: string[] = ['SGK', 'English', "Novel"];
  // selectedValues: string[] = ['val1','val2'];

  // ------------------------------- List checkbox ----------------------------------- //
  bookType = {SGK: false, English: false, Novel: false};

  show(){
    console.log(this.books)
  }

  searchTable(search){
    var lst = [];

    this.books.forEach(element => {
      search = search.toLowerCase()
      var name = element.name.toLowerCase()
      var author = element.author.toLowerCase()

      // console.log(search, name, author)
      if(search === "" 
          || name.includes(search) 
          || author.includes(search)
      ){
        // var flag = true
        if(  (this.bookType.SGK && element.type === "SGK")
          || (this.bookType.English && element.type === "English")
          || (this.bookType.Novel && element.type === "Novel")
          || (!this.bookType.SGK && !this.bookType.English && !this.bookType.Novel)){
            lst.push(element)
          }  
      }
    });
    // console.log(lst)
    this.books = lst
  }

  editBook(){
    this.location.go("/bookediter/")
  }

}

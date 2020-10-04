import { Component, OnInit, Output } from '@angular/core';
import { Books } from '../books';
import { BookService } from '../booklist.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookediter',
  templateUrl: './bookediter.component.html',
  styleUrls: ['./bookediter.component.scss']
})
export class BookediterComponent implements OnInit {
  selectedValues = true;
  rating = 2;

  id: number;
  title = !this.id ? 'Add book list' : 'Edit book list';

  field = ['Type', 'Name', 'Author', 'Rating'];

  book = new Books(-1, '', '', '', 0);

  listbook: Books[];

  constructor(
    private bookservice: BookService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    if (this.id) {
      this.bookservice.getBooks().subscribe(
        (book) => {
          this.listbook = book;
        }
      );
      this.book.no = this.listbook[this.id - 1].no;
      this.book.type = this.listbook[this.id - 1].type;
      this.book.name = this.listbook[this.id - 1].name;
      this.book.author = this.listbook[this.id - 1].author;
      this.book.rating = this.listbook[this.id - 1].rating;
    }
  }

  addBook() {
    console.log('add');
    if (!this.id) {
      this.book.no = this.bookservice.getSize() + 1;
      this.bookservice.addBook(this.book);
    } else {
      this.book.no = this.id;
      this.bookservice.editBook(this.id - 1, this.book);
    }
    this.location.back();
  }
}

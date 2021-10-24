import {Component, OnInit} from '@angular/core';
import {Book} from "../../shared/interfaces/book.interface";
import {BookService} from "../../shared/services/book.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  books: Book[];
  filteredBooks: Book[];

  constructor(private bookService: BookService) {
    this.books = bookService.getAllBooks();
  }


  ngOnInit(): void {
    this.filteredBooks = this.books;
  }
}



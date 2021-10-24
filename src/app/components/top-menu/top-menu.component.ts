import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../shared/interfaces/book.interface";
import {BookService} from "../../shared/services/book.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  @Input() isSearch = false;
  @Output() onBooksFiltered = new EventEmitter();
  searchText = '';
  books: Book[];

  constructor(private bookService: BookService) {
    this.books = bookService.getAllBooks();
  }


  onSearchPush(): void {
    this.onBooksFiltered.emit(this.filterBooksByName(this.searchText));
  }

  filterBooksByName(name: string): Book[] {
    return this.books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../shared/interfaces/book.interface";
import {BookService} from "../../shared/services/book.service";

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book;
  noPictureUrl: string;

  constructor(private bookService: BookService) {
    this.noPictureUrl = bookService.noPictureUrl;
  }

  ngOnInit(): void {
  }

}

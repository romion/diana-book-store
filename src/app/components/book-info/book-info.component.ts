import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { BookService } from "../../shared/services/book.service";
import {Book} from "../../shared/interfaces/book.interface";
import {ShoppingService} from "../../shared/services/shopping.service";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit, OnDestroy {
  book: Book;
  subscription: Subscription;
  noPictureUrl: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private bookService: BookService,
    private shoppingService: ShoppingService
  ) {
    this.noPictureUrl = bookService.noPictureUrl;
  }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(params => {
      this.book = this.bookService.getBookById(+params['id'])
    });
  }

  onBookBuy(): void {
    this.shoppingService.addBookToBasket(this.book);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

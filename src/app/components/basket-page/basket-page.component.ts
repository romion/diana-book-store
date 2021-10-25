import { Component, OnInit } from '@angular/core';
import {ShoppingService} from "../../shared/services/shopping.service";
import {Book, CashedBooks} from "../../shared/interfaces/book.interface";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {
  booksInBasket: Book[] = [];
  cashedBooks: CashedBooks;
  displayedColumns: string[] = ['table-picture', 'table-book', 'table-price', 'table-buttons'];

  constructor(private shoppingService: ShoppingService) {}


  ngOnInit(): void {
    this.cashedBooks = this.shoppingService.getCashedBooks();
    this.booksInBasket = this.shoppingService.getBooksByCash(this.cashedBooks);
  }

}

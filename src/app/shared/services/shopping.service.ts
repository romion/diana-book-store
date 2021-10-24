import { Injectable } from '@angular/core';
import {Book} from "../interfaces/book.interface";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private booksInBasket: Book[] = [];
  private basketListener$ = new BehaviorSubject([]);

  addBookToBasket(book: Book): void {
    this.booksInBasket.push(book);
    this.basketListener$.next(this.booksInBasket)
  }

  listenBasketChanges(): Observable<Book[]> {
    return this.basketListener$.asObservable();
  }

  getBooksInBasket(): Book[] {
    return this.booksInBasket;
  }
}

import {Injectable} from '@angular/core';
import {Book, CashedBooks} from "../interfaces/book.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {BookService} from "./book.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{
  private booksInBasket: Book[] = [];
  private basketListener$ = new BehaviorSubject([]);
  private cashedBooks: CashedBooks;

  constructor(private bookService: BookService) {
    this.cashedBooks = JSON.parse(localStorage.getItem('cashedBooks'));
    this.getBooksByCash(this.cashedBooks);
    this.basketListener$.next(this.booksInBasket);
  }

  addBookToBasket(book: Book): void {
    this.booksInBasket.push(book);
    this.cashedBooks = this.casheBooks(this.booksInBasket);
    localStorage.setItem('cashedBooks', JSON.stringify(this.cashedBooks));
    this.basketListener$.next(this.booksInBasket)
  }

  listenBasketChanges(): Observable<Book[]> {
    return this.basketListener$.asObservable();
  }

  getBooksInBasket(): Book[] {
    return this.booksInBasket;
  }

  getCashedBooks(): CashedBooks {
    return this.cashedBooks;
  }

  casheBooks(books: Book[]): CashedBooks {
    const cashedBooks: CashedBooks = {};
    books.forEach(book => {
      if (cashedBooks[book.id]) {
        cashedBooks[book.id]++;
      } else {
        cashedBooks[book.id] = 1;
      }
    })
    return cashedBooks;
  }

  getBooksByCash(cashedBooks: CashedBooks): Book[] {
    const foundBooks: Book[] = [];
    if (cashedBooks) {
      this.booksInBasket = [];
      Object.keys(cashedBooks).forEach(id => {
        const foundBook = this.bookService.getBookById(+id);
        for (let i = 1; i <= cashedBooks[+id]; i++) {
          this.booksInBasket.push(foundBook)
        }
        foundBooks.push(foundBook)
      })
    }
    return foundBooks;
  }
}

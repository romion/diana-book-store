import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingService} from "../../services/shopping.service";
import {Subscription} from "rxjs";
import {Book} from "../../interfaces/book.interface";

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.scss']
})
export class BasketButtonComponent implements OnInit, OnDestroy {
  shoppingCount = 0;
  basketListener$: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.basketListener$ = this.shoppingService.listenBasketChanges().subscribe((res: Book[]) => {
      this.shoppingCount = res.length;
    })
  }

  ngOnDestroy() {
    this.basketListener$.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import {ShoppingService} from "../../shared/services/shopping.service";

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) {}


  ngOnInit(): void {
    console.log(this.shoppingService.getBooksInBasket());
  }

}

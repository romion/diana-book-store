import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookInfoComponent} from "./components/book-info/book-info.component";
import {HomeComponent} from "./components/home/home.component";
import {BasketPageComponent} from "./components/basket-page/basket-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'basket', component: BasketPageComponent},
  { path: 'book/:id', component: BookInfoComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

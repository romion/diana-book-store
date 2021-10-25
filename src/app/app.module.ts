import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule } from "@angular/forms";
import { BookInfoComponent } from './components/book-info/book-info.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { HomeComponent } from "./components/home/home.component";
import { BookService } from "./shared/services/book.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { BasketButtonComponent } from './shared/components/basket-button/basket-button.component';
import {MatBadgeModule} from '@angular/material/badge';
import { BasketPageComponent } from './components/basket-page/basket-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    TopMenuComponent,
    FooterComponent,
    BookPreviewComponent,
    BasketButtonComponent,
    BasketPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

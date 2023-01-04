import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './Pages/productdetails/productdetails.component';
import { CartComponent } from './Pages/cart/cart.component';
import { WishlistComponent } from './Pages/wishlist/wishlist.component';

// bootstrap pagination
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { DjangoapitestComponent } from './components/djangoapitest/djangoapitest.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CartComponent,
    WishlistComponent,
    DjangoapitestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    // bootstrap pagination
    NgbPagination,
    // djapipost form
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

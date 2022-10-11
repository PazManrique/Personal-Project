import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductService } from './services/product.service';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import {MatCardModule} from '@angular/material/card';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';





@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    CardProductComponent,
    NavBarComponent,
    ProductDetailsComponent,
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

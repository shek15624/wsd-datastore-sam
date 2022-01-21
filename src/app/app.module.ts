import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { GetproductsComponent } from './getproducts/getproducts.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductsComponent,
    GetproductsComponent,
    DeleteproductsComponent,
    UpdateproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

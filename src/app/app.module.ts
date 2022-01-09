import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    // FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

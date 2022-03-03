import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DataProtectionModule } from './data-protection/data-protection.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // AuthModule,
    // RecipeModule,
    // DataProtectionModule,
    // HomeModule,
    // PageNotFoundModule,
    HeaderModule,
    FooterModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

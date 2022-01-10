import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { DataProtectionComponent } from './data-protection/components/data-protection/data-protection.component';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { RecipeComponent } from './recipe/components/recipe/recipe.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    DataProtectionComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    // FormsModule,
    AuthModule,
    HeaderModule,
    FooterModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

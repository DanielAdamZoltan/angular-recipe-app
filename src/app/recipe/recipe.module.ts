import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyRecipeAddComponent } from './components/easy-recipe-add/easy-recipe-add.component';
import { ComplexRecipeAddComponent } from './components/complex-recipe-add/complex-recipe-add.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltrationComponent } from './components/filtration/filtration.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent,
    FiltrationComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent
  ]
})
export class RecipeModule { }

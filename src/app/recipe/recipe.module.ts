import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyRecipeAddComponent } from './components/easy-recipe-add/easy-recipe-add.component';
import { ComplexRecipeAddComponent } from './components/complex-recipe-add/complex-recipe-add.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltrationComponent } from './components/filtration/filtration.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchComponent } from './components/search/search.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FilterPipe } from './pipes/filter.pipe';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { RecipeComponent } from './components/recipe/recipe.component';



@NgModule({
  declarations: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeCardComponent,
    FiltrationComponent,
    PaginationComponent,
    SearchComponent,
    RecipeItemComponent,
    FilterPipe,
    IngredientComponent,
    RecipeComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RecipeRoutingModule
  ],
  exports: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent,
    SearchComponent
  ]
})
export class RecipeModule { }

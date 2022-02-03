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
import { SearchComponent } from './components/search/search.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { FilterPipe } from './components/complex-recipe-add/filter.pipe';



@NgModule({
  declarations: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent,
    FiltrationComponent,
    PaginationComponent,
    SearchComponent,
    RecipeItemComponent,
    FilterPipe
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

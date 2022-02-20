import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ComplexRecipeAddComponent } from '../recipe/components/complex-recipe-add/complex-recipe-add.component';
import { RecipeCardComponent } from '../recipe/components/recipe-card/recipe-card.component';
import { RecipeModule } from '../recipe/recipe.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RecipeModule
  ]
})
export class HomeModule { }

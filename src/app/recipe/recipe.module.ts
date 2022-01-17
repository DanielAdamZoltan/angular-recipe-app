import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyRecipeAddComponent } from './components/easy-recipe-add/easy-recipe-add.component';
import { ComplexRecipeAddComponent } from './components/complex-recipe-add/complex-recipe-add.component';
import { RecipeComponent } from './components/recipe/recipe.component';



@NgModule({
  declarations: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent,
    RecipeComponent
  ]
})
export class RecipeModule { }

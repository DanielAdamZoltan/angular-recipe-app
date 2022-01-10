import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EasyRecipeAddComponent } from './components/easy-recipe-add/easy-recipe-add.component';
import { ComplexRecipeAddComponent } from './components/complex-recipe-add/complex-recipe-add.component';



@NgModule({
  declarations: [
    EasyRecipeAddComponent,
    ComplexRecipeAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }

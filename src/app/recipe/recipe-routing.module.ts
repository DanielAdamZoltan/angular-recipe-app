import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';


const routes: Routes = [
  // {path: 'receptek', component: RecipeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }

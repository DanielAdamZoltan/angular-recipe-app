import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RecipeModule } from '../recipe/recipe.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RecipeModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

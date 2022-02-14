import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeComponent implements OnInit {

  private _recipes: Recipe[];
  private _searchedRecipe: boolean = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.getRecipes();
  }

  get recipes(){
    return this._recipes;
  }

  set recipes(recipes: Recipe[]){
    this._recipes = recipes;
  }

  public getRecipes(): void {
    if (!this._searchedRecipe) {
      this.recipeService.getRecipe().subscribe(
      (response: Recipe[]) => {
        this._recipes = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    }
  }

}

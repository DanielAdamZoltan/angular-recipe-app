import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { RecipeCard } from './recipeCard';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  private _recipeCards!: RecipeCard[];
  private _searched: boolean = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.getRecipes();
  }

  get recipeCards(){
     return this._recipeCards;
  }

  set recipeCards(recipeCards: RecipeCard[]){
    this._recipeCards = recipeCards;
  }


  public getRecipes(): void{
    if (!this._searched) {
      this.recipeService.getRecipeCard().subscribe(
      (response: RecipeCard[]) => {
        this._recipeCards = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    }
    
  }

  public tempMethod(): void{
    const results: RecipeCard[] = [];
    this._recipeCards = results;
  }

}

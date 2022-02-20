import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  private _ingredients: Ingredient[];
  private _searchedIngredient: boolean = false;

  constructor(private recipeService: RecipeService) { }



  ngOnInit(): void {
  }

  get ingredients(){
    return this._ingredients;
  }

  set ingredients(ingredients: Ingredient[]){
    this._ingredients = ingredients;
  }

  public getIngredients(): void {
    this.recipeService.getIngredient().subscribe(
    (response: Ingredient[]) => {
      this._ingredients = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )
}

  public searchIngredients(key: string): void {

    if (key=='') {
        this._searchedIngredient = false;
    }else{
      this._searchedIngredient = true;
    }
    const results: Ingredient[] = [];
    for (const ingredients of this._ingredients){
      if (ingredients.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
     /* ||  user.email.toLowerCase().indexOf(key.toLowerCase()) != -1
      ||  user.jobTitle.toLowerCase().indexOf(key.toLowerCase()) != -1
      ||  user.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) != -1*/
      ) {
        results.push(ingredients);
      }
    }
    this._ingredients = results;
    if (results.length === 0 || !key) {
        this.getIngredients();
    }
  }

  public deleteIngredients(){
    
  }
  

}

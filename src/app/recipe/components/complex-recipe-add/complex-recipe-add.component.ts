import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Ingredients } from './ingredients';

@Component({
  selector: 'app-complex-recipe-add',
  templateUrl: './complex-recipe-add.component.html',
  styleUrls: ['./complex-recipe-add.component.css']
})
export class ComplexRecipeAddComponent implements OnInit {

  private _ingredientsAddContainer:boolean = false;
  private _stepsAddContainer:boolean = false;
  private _searched: boolean = false;
  private _ingredients: Ingredients[];
  private _dataset = ['Alma', 'körte', 'dió', 'csirke', 'hurka', 'disznó', 'annanász'];

  htmlElement:any = document.getElementById("ingredients-add-container");

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  get dataset(){
    return this._dataset;
  }

  set dataset(dataset){
    this._dataset = dataset;
  }

  get searched(){
    return this._searched;
  }

  get ingredientsAddContainer(){
    return this._ingredientsAddContainer;
  }

  get stepsAddContainer(){
    return this._stepsAddContainer;
  }

  set searched(searched: boolean){
    this._searched = searched;
  }

  set ingredientsAddContainer(ingredientsAddContainer: boolean){
    this._ingredientsAddContainer = ingredientsAddContainer;
  }

  set stepsAddContainer(stepsAddContainer: boolean){
    this._stepsAddContainer = stepsAddContainer;
  }



  public addIngredientsDiv(){
    this._ingredientsAddContainer = true;
   } 

   public addIngredientsDiv1(){
     if(this._ingredientsAddContainer = false){
      this._ingredientsAddContainer = true;
    }
    else{
      var sData = "";
      sData += "<div class='ingredients-add-container' id='ingredients-add-container' *ngIf='ingredientsAddContainer'>";
      sData += "<input type='text' class='form-control' id='ingredient-input-text' aria-describedby='ingredientText' placeholder='Alapanyagok'>";
        var boxContainer = document.createElement("div");
        
    }
   }
    
    
  

   public hideIngredientsDiv(){
    this._ingredientsAddContainer = false;
  }

  public addStepsDiv(){
    this._stepsAddContainer = true;
  }

  public hideStepsDiv(){
    this._stepsAddContainer = false;
  }

  public getUsers(): void{
    if (!this._searched) {
      this.recipeService.getIngredients().subscribe(
      (response: Ingredients[]) => {
        this._ingredients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    }
    
  }



  public searchIngredients(key: string): void {

    if (key=='') {
        this._searched = false;
    }else{
      this._searched = true;
    }
    const results: Ingredients[] = [];
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
        this.getUsers();
    }
  }
}

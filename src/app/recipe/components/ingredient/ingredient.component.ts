import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  elRef: ElementRef;

  private _ingredients: Ingredient[];
  private _searchedIngredient: boolean = false;

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  // constructor(private recipeService: RecipeService) { }



  ngOnInit(): void {
    this.getHtmlContent();
  }

  get ingredients(){
    return this._ingredients;
  }

  set ingredients(ingredients: Ingredient[]){
    this._ingredients = ingredients;
  }

//   public getIngredients(): void {
//     this.recipeService.getIngredient().subscribe(
//     (response: Ingredient[]) => {
//       this._ingredients = response;
//     },
//     (error: HttpErrorResponse) => {
//       alert(error.message);
//     }
//   )
// }

public getHtmlContent(){
  return this.elRef.nativeElement.innerHTML;
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
        // this.getIngredients();
    }
  }

  public deleteIngredients(){
    const container = document.getElementById("ingredients-add-container0");
    container.remove;
    console.log("its working");
  }
  

}







// import { Component, ElementRef } from '@angular/core';

// @Component({
//   selector: 'smart-input',
//   template: `
//     <div [ngSwitch]="type">
//       <input type="text" *ngSwitchCase="'text'" />
//       <input type="number" *ngSwitchCase="'number'" />
//       <p *ngSwitchDefault>Unsupported type: {{ type }}</p>
//     </div>
//   `
// })
// export class SmartInputComponent {
//   type: string;
//   constructor(private elementRef: ElementRef) {
//     this.type = this.elementRef.nativeElement.getAttribute('type');
//   }
// }

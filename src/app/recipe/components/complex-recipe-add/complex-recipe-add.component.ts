import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-recipe-add',
  templateUrl: './complex-recipe-add.component.html',
  styleUrls: ['./complex-recipe-add.component.css']
})
export class ComplexRecipeAddComponent implements OnInit {

  ingredientsAddContainer:boolean = false;
  stepsAddContainer:boolean = false;

  htmlElement:any = document.getElementById("ingredients-add-container");

  constructor() { }

  ngOnInit(): void {
  }

  addIngredientsDiv(){
    this.ingredientsAddContainer = true;
   } 

   addIngredientsDiv1(){
     if(this.ingredientsAddContainer = false){
      this.ingredientsAddContainer = true;
    }
    else{
      var sData = "";
      sData += "<div class='ingredients-add-container' id='ingredients-add-container' *ngIf='ingredientsAddContainer'>";
      sData += "<input type='text' class='form-control' id='ingredient-input-text' aria-describedby='ingredientText' placeholder='Alapanyagok'>";
        var boxContainer = document.createElement("div");
        
    }
   }
    
    
  

  hideIngredientsDiv(){
    this.ingredientsAddContainer = false;
  }

  addStepsDiv(){
    this.stepsAddContainer = true;
  }

  hideStepsDiv(){
    this.stepsAddContainer = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { RecipeTable } from './recipeTable';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  private _recipeTables: RecipeTable[];

  constructor() { }

  ngOnInit(): void {
  }

  get recipeTables(){
    return this._recipeTables;
  }

  set recipeTables(recipeTables: RecipeTable[]){
    this._recipeTables = recipeTables;
  }
}

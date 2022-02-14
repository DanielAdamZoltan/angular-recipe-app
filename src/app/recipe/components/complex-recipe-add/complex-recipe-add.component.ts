import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Cuisine } from '../../models/cuisine';
import { RecipeCategory } from '../../models/recipe-category';
import { Ingredient } from '../../models/ingredient';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-complex-recipe-add',
  templateUrl: './complex-recipe-add.component.html',
  styleUrls: ['./complex-recipe-add.component.css']
})
export class ComplexRecipeAddComponent implements OnInit {

  private _ingredientsAddContainer:boolean = false;
  private _stepsAddContainer:boolean = false;

// lehet több kell belöle tipusonként
  private _searchedIngredient: boolean = false;

  private _ingredients: Ingredient[];
  private _recipeCategories: RecipeCategory[];
  private _cuisines: Cuisine[];
  // private _recipes: Recipe[];
  private _searchText: string;

  private _selectedFiles: FileList;
  private _currentFile: File;
  private _progress = 0;
  private _message = '';
  private _fileInfos: Observable<any>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipeCategories();
    this.getCuisines();
    this.fileInfos = this.recipeService.getFile();
  }

  get selectedFiles(){
    return this._selectedFiles;
  }

  get currentFile(){
    return this._currentFile;
  }

  get progress(){
    return this._progress;
  }

  get message(){
    return this._message;
  }

  get fileInfos(){
    return this._fileInfos;
  }

  get searchText(){
    return this._searchText;
  }

  get ingredients(){
    return this._ingredients;
  }

  get cuisines(){
    return this._cuisines;
  }

  get recipeCategories(){
    return this._recipeCategories;
  }

  get searched(){
    return this._searchedIngredient;
  }

  get ingredientsAddContainer(){
    return this._ingredientsAddContainer;
  }

  get stepsAddContainer(){
    return this._stepsAddContainer;
  }

  // get recipe(){
  //   return this._recipes;
  // }

  set searched(searched: boolean){
    this._searchedIngredient = searched;
  }

  set ingredientsAddContainer(ingredientsAddContainer: boolean){
    this._ingredientsAddContainer = ingredientsAddContainer;
  }

  set stepsAddContainer(stepsAddContainer: boolean){
    this._stepsAddContainer = stepsAddContainer;
  }

  set recipeCategories(foodCategories: RecipeCategory[]){
    this._recipeCategories = foodCategories;
  }

  set cuisines(cuisines: Cuisine[]){
    this._cuisines = cuisines;
  }

  set ingredients(ingredients: Ingredient[]){
    this._ingredients = ingredients;
  }

  // set recipes(recipes: Recipe[]){
  //   this._recipes = recipes;
  // }

  set searchText(searchText: string){
    this._searchText = searchText;
  }

  set selectedFiles(selectedFiles: FileList){
    this._selectedFiles = selectedFiles;
  }

  set currentFile(currentFile: File){
    this._currentFile = currentFile;
  }

  set progress(progress: number){
    this._progress = progress;
  }

  set message(message: string){
    this._message = message;
  }

  set fileInfos(fileInfos: Observable<any>){
    this._fileInfos = fileInfos;
  }
  

  public selectFile(event: any){
    this.selectFile = event.target.files;
  }

  upload() {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.recipeService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.recipeService.getFile();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }


  public getRecipeCategories(): void {
      this.recipeService.getRecipeCategory().subscribe(
      (response: RecipeCategory[]) => {
        this._recipeCategories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getCuisines(): void {
      this.recipeService.getCuisin().subscribe(
      (response: Cuisine[]) => {
        this._cuisines = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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


}

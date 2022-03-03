import { HttpErrorResponse, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service';
import { Cuisine } from '../../models/cuisine';
import { RecipeCategory } from '../../models/recipe-category';
import { Ingredient } from '../../models/ingredient';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { NgForm } from '@angular/forms';
import { IngredientComponent } from '../ingredient/ingredient.component';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-complex-recipe-add',
  templateUrl: './complex-recipe-add.component.html',
  styleUrls: ['./complex-recipe-add.component.css']
})
export class ComplexRecipeAddComponent implements OnInit {

  private _ingredientsAddContainer:boolean = false;
  private _stepsAddContainer:boolean = false;

  private _ingredientCount: number;

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

   @ViewChild('ingredientsContainer', {static: true}) ingredientsContainer:  ElementRef;

@ViewChild(RecipeComponent) recipeComponent: RecipeComponent;

   @ViewChild(IngredientComponent) ingredientTemp: IngredientComponent;

  constructor(private recipeService: RecipeService, private renderer: Renderer2) { }

 
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

  // get ingredientHtml(){
  //   return this._ingredientHtml;
  // }

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

  public onAddRecipe(addForm: NgForm):void{
    document.getElementById('add-recipe-form').click();
    this.recipeService.addRecipe(addForm.value).subscribe(
      (response: Recipe) => {
        console.log(response);

        // this.recipeComponent.
        // this.getUsers();
         addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    )
  }

  public addIngredientsContainer(){

    var id: number = 0;
    const element: HTMLDivElement = this.renderer.createElement('div');
    element.id = 'ingredients-add-container' + id;
      id++;
      element.className = 'ingredients-add-container';

    this._ingredientsAddContainer = true;

    
  }

  public addIngredientsContainer1(){
    
    var id: number = 0;
    const container = document.getElementById("ingredientsContainer");
    const ingredientsAddContainer: HTMLDivElement = this.renderer.createElement('div');
    
    ingredientsAddContainer.id = 'ingredients-add-container' + id;
      id++;
      ingredientsAddContainer.className = 'ingredients-add-container';
    
    // const temp = '  <input type="search"       (ngModelChange)="searchIngredients(key.value)" #key="ngModel" ngModel name="key" id="searchIngredients" [(ngModel)]="searchText"          class="form-control mr-sm-2" aria-describedby="ingredientText"           placeholder="Alapanyagok" required>      <br>      <div class="search-result">        <ul *ngFor="let ingredient of ingredients">          <li>{{ingredient.name}}</li>        </ul>      </div>      <div class="unit">      <input type="number" class="form-control" id="ingredient-input-number" aria-describedby="ingredientNumber" placeholder="mennyiség" style="width: 50%;">          <select class="form-select form-select-sm" id="ingredient-input-select" aria-label=".form-select-sm example" style="width: 50%;">            <option selected>Mértékegység</option>            <option value="g">g</option>            <option value="dkg">dkg</option>            <option value="kg">kg</option>            <option value="ml">l</option>            <option value="dl">ml</option>            <option value="l">dl</option>            <option value="csipet">csipet</option>            <option value="késhegynyi">késhegynyi</option>            <option value="kávéskanál">kávéskanál</option>            <option value="teáskanál">teáskanál</option>            <option value="evőkanál">evőkanál</option>            <option value="csepp">csepp</option>            <option value="izlés szerint">izlés szerint</option>          </select>        </div>        <br>        <button (click)="hideIngredientsDiv()">          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>          </svg>        </button> ';
    ingredientsAddContainer.innerHTML = ' <input type="search"       (ngModelChange)="searchIngredients(key.value)" #key="ngModel" ngModel name="key" id="searchIngredients" [(ngModel)]="searchText"          class="form-control mr-sm-2" aria-describedby="ingredientText"           placeholder="Alapanyagok" required>      <br>      <div class="search-result">        <ul *ngFor="let ingredient of ingredients">          <li>{{ingredient.name}}</li>        </ul>      </div>      <div class="unit">      <input type="number" class="form-control" id="ingredient-input-number" aria-describedby="ingredientNumber" placeholder="mennyiség" style="width: 50%;">          <select class="form-select form-select-sm" id="ingredient-input-select" aria-label=".form-select-sm example" style="width: 50%;">            <option selected>Mértékegység</option>            <option value="g">g</option>            <option value="dkg">dkg</option>            <option value="kg">kg</option>            <option value="ml">l</option>            <option value="dl">ml</option>            <option value="l">dl</option>            <option value="csipet">csipet</option>            <option value="késhegynyi">késhegynyi</option>            <option value="kávéskanál">kávéskanál</option>            <option value="teáskanál">teáskanál</option>            <option value="evőkanál">evőkanál</option>            <option value="csepp">csepp</option>            <option value="izlés szerint">izlés szerint</option>          </select>        </div>        <br>        <button id="deleteIngredientDiv" onclick="deleteIngredientsContainer()">          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>          </svg>        </button>';
    // element.innerHTML = 
    // element.append(temp);
    // element.innerHTML = 
    this.renderer.appendChild(this.ingredientsContainer.nativeElement,ingredientsAddContainer);
    // container?.appendChild(element);
    
    
    
  }

  public deleteIngredientsContainer(){
    const container = document.getElementById("ingredients-add-container0");
    container.remove;
    console.log("its working");
  }

  public addIngredientsDiv(){
    this._ingredientsAddContainer = true;
   } 



  //  <div class="ingredients-add-container" id="ingredients-add-container" *ngIf="ingredientsAddContainer">
  //     <input type="search" 
  //     (ngModelChange)="searchIngredients(key.value)" #key="ngModel" ngModel name="key" id="searchIngredients" [(ngModel)]="searchText"
  //         class="form-control mr-sm-2" aria-describedby="ingredientText"
  //          placeholder="Alapanyagok" required>
  //     <br>
  //     <div class="search-result">
  //       <ul *ngFor="let ingredient of ingredients">
  //         <li>{{ingredient.name}}</li>
  //       </ul>
  //     </div>
  //     <div class="unit">
  //     <input type="number" class="form-control" id="ingredient-input-number" aria-describedby="ingredientNumber" placeholder="mennyiség" style="width: 50%;">
  //         <select class="form-select form-select-sm" id="ingredient-input-select" aria-label=".form-select-sm example" style="width: 50%;">
  //           <option selected>Mértékegység</option>
  //           <option value="g">g</option>
  //           <option value="dkg">dkg</option>
  //           <option value="kg">kg</option>
  //           <option value="ml">l</option>
  //           <option value="dl">ml</option>
  //           <option value="l">dl</option>
  //           <option value="csipet">csipet</option>
  //           <option value="késhegynyi">késhegynyi</option>
  //           <option value="kávéskanál">kávéskanál</option>
  //           <option value="teáskanál">teáskanál</option>
  //           <option value="evőkanál">evőkanál</option>
  //           <option value="csepp">csepp</option>
  //           <option value="izlés szerint">izlés szerint</option>
  //         </select>
  //       </div>
  //       <br>
  //       <button (click)="hideIngredientsDiv()">
  //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  //           <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  //           <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  //         </svg>
  //       </button>
  //   </div>



   public addIngredientsDiv1(): void{
     
    var counter: number = 0;
     
       const container = document.getElementById("ingredients-container");
      //  const div = document.createElement('div')
      // const valami: string;
      var temp1 = IngredientComponent;
      var temp = '  <div class="ingredients-add-container" id="ingredients-add-container">     <input type="search"       (ngModelChange)="searchIngredients(key.value)" #key="ngModel" ngModel name="key" id="searchIngredients" [(ngModel)]="searchText"          class="form-control mr-sm-2" aria-describedby="ingredientText"           placeholder="Alapanyagok" required>      <br>      <div class="search-result">        <ul *ngFor="let ingredient of ingredients">          <li>{{ingredient.name}}</li>        </ul>      </div>      <div class="unit">      <input type="number" class="form-control" id="ingredient-input-number" aria-describedby="ingredientNumber" placeholder="mennyiség" style="width: 50%;">          <select class="form-select form-select-sm" id="ingredient-input-select" aria-label=".form-select-sm example" style="width: 50%;">            <option selected>Mértékegység</option>            <option value="g">g</option>            <option value="dkg">dkg</option>            <option value="kg">kg</option>            <option value="ml">l</option>            <option value="dl">ml</option>            <option value="l">dl</option>            <option value="csipet">csipet</option>            <option value="késhegynyi">késhegynyi</option>            <option value="kávéskanál">kávéskanál</option>            <option value="teáskanál">teáskanál</option>            <option value="evőkanál">evőkanál</option>            <option value="csepp">csepp</option>            <option value="izlés szerint">izlés szerint</option>          </select>        </div>        <br>        <button (click)="hideIngredientsDiv()">          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>          </svg>        </button>    </div>';     
      
       const element = document.createElement(temp);
      //  element.
       counter++;
      // div.id='';
      // div.className='';
      container?.appendChild(element);
      
     
     
     
    }

      // const div = document.getElementById("ingredients-add-container");
      
      // var sData = "";
      // sData += "<div class='ingredients-add-container' id='ingredients-add-container' *ngIf='ingredientsAddContainer'>";
      // sData += "<input type='text' class='form-control' id='ingredient-input-text' aria-describedby='ingredientText' placeholder='Alapanyagok'>";
      // var boxContainer = document.createElement("div");
        
    
   
    
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

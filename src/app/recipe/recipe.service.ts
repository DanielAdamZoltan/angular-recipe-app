import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecipeCard } from './components/recipe/recipeCard';
import {Observable} from 'rxjs';
import { Ingredient } from './components/complex-recipe-add/ingredient';
import { FoodCategory } from './components/complex-recipe-add/food-category';
import { Cuisine } from './components/complex-recipe-add/cuisine';

@Injectable({ providedIn: 'root'})
export class RecipeService {
  private apiServerUrl = environment.apiRecipeUrl;

  // constructor(){}

  constructor(private http: HttpClient) { }

  public getFoodCategory(): Observable<FoodCategory[]>{
    return this.http.get<FoodCategory[]>(`${this.apiServerUrl}/category/all`);
  }

  public getCuisin(): Observable<Cuisine[]>{
    return this.http.get<Cuisine[]>(`${this.apiServerUrl}/cuisine/all`);
  }

  // public getFoodCategoryName(): Observable<string[]>{
  //   return this.http.get<string[]>(`${this.apiServerUrl}/category/name`);
  // }

  // public getRecipeCard(): Observable<RecipeCard[]>{
  //   return this.http.get<RecipeCard[]>(`${this.apiServerUrl}/home/all`);
  // }
  public getIngredients(): Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(`${this.apiServerUrl}/ingredients/all`);
}
  //   public addUser(user: User): Observable<User>{
  //     return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  // }

  // public updateUser(user: User): Observable<User>{
  //     return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  // }

  // public deleteUser(userId: number): Observable<void>{
  //     return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  // }

}

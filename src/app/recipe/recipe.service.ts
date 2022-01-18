import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecipeCard } from './components/recipe/recipeCard';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class RecipeService {
  private apiServerUrl = environment.apiRecipeUrl;

  constructor(private http: HttpClient) { }

//   public getRecipeCard(): Observable<RecipeCard[]>{
//     return this.http.get<RecipeCard[]>(`${this.apiServerUrl}/home/all`);
// }
}

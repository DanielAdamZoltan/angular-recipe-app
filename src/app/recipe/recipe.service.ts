import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RecipeCard } from './components/recipe/recipeCard';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class RecipeService {
  private apiServerUrl = environment.apiRecipeUrl;

  constructor(private http: HttpClient) { }

  public getRecipeCard(): Observable<RecipeCard[]>{
    return this.http.get<RecipeCard[]>(`${this.apiServerUrl}/home/all`);

    public addUser(user: User): Observable<User>{
      return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  // public updateUser(user: User): Observable<User>{
  //     return this.http.put<User>(`${this.apiServerUrl}/user/update`, user);
  // }

  // public deleteUser(userId: number): Observable<void>{
  //     return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  // }
}
}

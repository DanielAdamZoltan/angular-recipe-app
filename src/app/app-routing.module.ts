import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { HomeComponent } from './home/components/home/home.component';

import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { EasyRecipeAddComponent } from './recipe/components/easy-recipe-add/easy-recipe-add.component';
import { RecipeComponent } from './recipe/components/recipe/recipe.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'belepes', component: LoginComponent},
  {path: 'regisztracio', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'receptek', component: RecipeComponent},
  {path: 'mi-van-a-hutodben', component: EasyRecipeAddComponent},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, ResetPasswordComponent]

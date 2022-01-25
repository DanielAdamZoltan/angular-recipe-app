import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './data-protection/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './data-protection/terms-of-use/terms-of-use.component';
import { HomeComponent } from './home/components/home/home.component';

import { PageNotFoundComponent } from './page-not-found/components/page-not-found/page-not-found.component';
import { ComplexRecipeAddComponent } from './recipe/components/complex-recipe-add/complex-recipe-add.component';
import { FiltrationComponent } from './recipe/components/filtration/filtration.component';
import { RecipeItemComponent } from './recipe/components/recipe-item/recipe-item.component';
import { RecipeComponent } from './recipe/components/recipe/recipe.component';
import { RecipeModule } from './recipe/recipe.module';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'belepes', component: LoginComponent},
  {path: 'regisztracio', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'receptek', component: RecipeComponent},
//   {path: 'receptek', component: RecipeModule,
//   children: [
//     {
//       path: 'bolognai-spageti', component: RecipeItemComponent
//     }
//             ]
// },
  {path: 'receptek/bolognai-spageti', component: RecipeItemComponent},
  {path: 'mi-van-a-hutodben', component: FiltrationComponent},
  {path: 'felhasznalasi-feltetelek', component: TermsOfUseComponent},
  {path: 'adatvedelmi-szabalyzat', component: PrivacyPolicyComponent},
  {path: 'kereses', component: ComplexRecipeAddComponent},
  {path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, ResetPasswordComponent]

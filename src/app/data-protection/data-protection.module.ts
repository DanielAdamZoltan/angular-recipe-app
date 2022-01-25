import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';



@NgModule({
  declarations: [
    PrivacyPolicyComponent,
    TermsOfUseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataProtectionModule { }

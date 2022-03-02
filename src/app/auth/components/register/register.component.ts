import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showHidePassword();
  }

  public showHidePassword(): void{

   var checkbox = document.getElementById("btn-check-password-show");
   
   if(checkbox.onclick){
     var regPassword=document.getElementById("reg-password");
     if(regPassword.getAttribute('type')=='password')
       {
        regPassword.getAttribute('type')=='text'
     }else{
        regPassword.getAttribute('type')=='password'
     }
   }
  }
}
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _users: User[];
  private _editUser: User;
  private _deleteUser: User;
  private _searched: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  
  get users(){
    return this._users;
  }

  get editUser(){
    return this._editUser;
  }

  get deleteUser(){
    return this._deleteUser;
  }

  get searched(){
    return this._searched;
  }

  set users(users: User[]){
    this._users = users;
  }

  set editUser(editUser: User){
    this._editUser = editUser;
  }

  set deleteUser(deleteUser: User){
    this._deleteUser = deleteUser;
  }

  set searched(searched: boolean){
    this._searched = searched;
  }

  public getUsers(): void{
    if (!this._searched) {
      this.userService.getUser().subscribe(
      (response: User[]) => {
        this._users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    }
    
  }

  public onOpenModal(user: User, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    switch (mode) {
      case 'add':{
        button.setAttribute('data-target', '#addUserModal');
        break;
      };
      case 'edit':{
        this._editUser = user;
        button.setAttribute('data-target', '#updateUserModal');
        break;
      };
      case 'delete':{
        this._deleteUser = user;
        button.setAttribute('data-target', '#deleteUserModal');
        break;
      };    
    }
    container?.appendChild(button);
    button.click();
  }

  public onAddUser(addForm: NgForm):void{
    var field = '#imageUrl';
    console.log(field);
    document.getElementById('add-user-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);

        this.getUsers();
         addForm.reset();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
        addForm.reset();
      }
    )
  }

  public onUpdateUser(user: User): void{
    this.userService.updateUser(user).subscribe(
      (response: User) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }

  public onDeleteUser(userId: number): void{
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    )
  }



  public searchUsers(key: string): void {

    if (key=='') {
        this._searched = false;
    }else{
      this._searched = true;
    }
    const results: User[] = [];
    for (const user of this._users){
      if (user.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ||  user.lastName.toLowerCase().indexOf(key.toLowerCase()) != -1
      ||  user.email.toLowerCase().indexOf(key.toLowerCase()) != -1
      ) {
        results.push(user);
      }
    }
    this._users = results;
    if (results.length === 0 || !key) {
        this.getUsers();
    }
  }


}

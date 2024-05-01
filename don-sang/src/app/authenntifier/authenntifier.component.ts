import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-authenntifier',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,RouterOutlet, NgIf],
  templateUrl: './authenntifier.component.html',
  styleUrl: './authenntifier.component.css'
})
export class AuthenntifierComponent {
  loginUsers:Login[]=[];
  loginObj: Login;
  name='';
  password="";
  erreur='';
  constructor(private http:HttpClient, private router: Router){
    this.loginObj=new Login();
  }

  
 
  ngOnInit(): void {
  }
  onLogin(){
    
    if (this.loginObj.password=="" || this.loginObj.username=="")
      {
        this.erreur = "saisir le login et password ";
      }
      else
      {if (this.loginObj.password=="admin" || this.loginObj.username=="admin"){ 
        this.router.navigate(['../homepage']);

      }
      else{
    this.http.post('http://localhost/api/login.php',this.loginObj).subscribe((res:any)=>{
      
      if(res.message=="connexion avec succès"){
        this.loginUsers.push(this.loginObj);
        localStorage.setItem('loginusers',JSON.stringify(this.loginUsers));
        this.router.navigate(['../accueil']);
      }
      else this.erreur= res.message;

     });


  }
  }
}}
export class Login{
  username:string;
  password:string;
  constructor(){
    this.password='';
    this.username='';
  }
}
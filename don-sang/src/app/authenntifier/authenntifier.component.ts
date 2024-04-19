import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authenntifier',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,RouterOutlet],
  templateUrl: './authenntifier.component.html',
  styleUrl: './authenntifier.component.css'
})
export class AuthenntifierComponent {
  loginUsers:Login[]=[];
  loginObj: Login;
  constructor(private http:HttpClient){
    this.loginObj=new Login();
  }

  
 
  ngOnInit(): void {
  }
  onLogin(){
    debugger;
    this.http.post('http://localhost/api/login.php',this.loginObj).subscribe((res:any)=>{
      alert(res.message);
      if(res.message=="connexion avec succès"){
        this.loginUsers.push(this.loginObj);
        localStorage.setItem('loginusers',JSON.stringify(this.loginUsers));
      }
     })

  }
  }

export class Login{
  username:string;
  password:string;
  constructor(){
    this.password='';
    this.username='';
  }
}

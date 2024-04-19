import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,RouterOutlet],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  signupUsers:Signup[]=[];
  signupObj: Signup; 
  constructor(private http: HttpClient){
    this.signupObj= new Signup();
  }
  onSignup(){
    console.log(this.signupObj);
     this.http.post('http://localhost/api/user.php',this.signupObj).subscribe((res:any)=>{
      alert(res.msg);
      console.log(res.msg)

      
     })
     
  }
}


export class Signup{
    username: string;
    email: string;
    password: string;
    daten: string;
    gender: string;
   cin: number;
   numtel: number;
   localisation: string;
   typesang: string;
  constructor() {
    this.username = '';
    this.email = '';
    this.password = '';
    this.daten = '';
    this.gender = '';
    this.cin = 0;
    this.numtel = 0;
    this.localisation = '';
    this.typesang = '';
  }
}
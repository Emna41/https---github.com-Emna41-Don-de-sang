import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DonService } from '../services/don.service';
import { response } from 'express';
import { ModelComponent } from '../model/model/model.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-don',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './sang.component.html',
  styleUrl: './sang.component.css'
})
export class SangComponent {
  Demands: demandeSang[] = [];
  demandsobj: demandeSang = new demandeSang(); // Initialisez avec le constructeur

  constructor(private http: HttpClient) {}

  submitForm() {
    const demande = this.demandsobj;
    console.log(demande);
    this.http.post('http://localhost/api/demande_sang.php', demande).subscribe((response: any) => {
      alert(response.message);
    });
  }
}

export class demandeSang {
  nom: string;
  username: string;
  typesang: string;
  numtel: number;
  message: string;

  constructor() {
    this.nom = '';
    this.username = '';
    this.typesang = '';
    this.numtel = 0;
    this.message = '';
  }
}
  /*dons: any;
  donForm:FormGroup;

  constructor(private fb:FormBuilder ){
    this.donForm=this.fb.group({
      id:[""],
      nom:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required]),
      typesang:new FormControl('',[Validators.required]),
      numtel:new FormControl('',[Validators.required]),
      information:new FormControl('',[Validators.required]),
    });
  }
  ngOnInit(): void {
    this.getAllDemands();
  }
  onSubmit(){
    if(this.donForm.valid){
      var type=this.donForm.value.id==""?"Ajouter":"Editer";
      console.log(this.donForm.value);
      this.donService.createDemande(this.donForm.value).subscribe(
        data=>{
          if(type=='Ajouter'){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Votre demande est ajouter avec succées",
              showConfirmButton: false,
              timer: 1500
            });
          }else{
            Swal.fire({
              title: "Voulez-vous sauvegarder les changements?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: Don't save
            }).then((result: { isConfirmed: any; isDenied: any; }) => {
              /* Read more about isConfirmed, isDenied below 
              if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                window.location.reload();
              } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
              }
            });
          }
          
          this.donForm.reset();
          this.getAllDemands();
      }  )
    }else{
      this.donForm.markAllAsTouched();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tous les champs doivent être remplis!",
        
      });
    }
  }
  getAllDemands() {
    this.donService.getAllDemands().subscribe(data=>{console.log("demande",data);
    this.dons=data;
    });
    
  }
  deleteDemand(id:any){
    Swal.fire({
      title: "Vous etes sure?",
      text: "vous ne pouvez pas le recuperer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "supprimer!"
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.donService.deleteDemand(id).subscribe(data=>{ Swal.fire({
          title: "supprimer!",
          text: "Ta demande est supprimer.",
          icon: "success"
        });
        this.getAllDemands();
        
      });
    }
  });
  }*/
 
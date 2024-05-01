import { Component, OnInit, inject } from '@angular/core';
import { DonComponent } from '../don/don.component';
import { ModelComponent } from '../model/model/model.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DonService } from '../services/don.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { IDon } from '../model/model/models/Demande';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [ModelComponent,DonComponent,RouterLink,RouterLinkActive,CommonModule,HttpClientModule],
  providers:[DonService],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit{
  dons: IDon[]=[];
  data=[];
  constructor(private http: HttpClient, private donService: DonService) {}
  ngOnInit(): void {
    this.envoyer();
  }
  envoyer(){
    this.http.get<any>('http://localhost/api/demande_sang.php').subscribe((response)=>{
      console.log("Got the data");
      console.log(response);
      this.dons=response;
    });
  }
  trackBy(index: number, demande: IDon): number {
    return demande.id;
  }
  deleteDemand(id: any ): void {
    Swal.fire({
      title: "Êtes-vous sûr(e)?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer!"
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        this.http.delete(`http://localhost/api/demande_sang.php?id=${id}`).subscribe(() => {
          Swal.fire({
            title: "Supprimé!",
            text: "La demande a été supprimée avec succès.",
            icon: "success"
          }).then(() => {
           this.envoyer();
            // Reload the current page after successful deletion
          });
        });
      }
    });
  }
  
  updateDemand(id: any, updatedDemand: any): void {
    Swal.fire({
      title: "Êtes-vous sûr(e)?",
      text: "Voulez-vous vraiment mettre à jour cette demande?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, mettre à jour!"
    }).then((result: { isConfirmed: any }) => {
      if (result.isConfirmed) {
        // Envoie une requête PUT ou POST avec les données mises à jour
        this.http.put(`http://localhost/api/demande_sang.php?id=${id}`, updatedDemand).subscribe(() => {
          Swal.fire({
            title: "Mise à jour réussie!",
            text: "La demande a été mise à jour avec succès.",
            icon: "success"
          }).then(() => {
            window.location.reload();
            // Reload the current page after successful deletion
          });// Rafraîchit la liste après la mise à jour
        });
      }
    });
  }
  
  /*isModelOpen=false;
  openModel(){
    this.isModelOpen=true;
  }
  closeModel() {
    this.isModelOpen=false;
  }
  dons: any;
  donForm:FormGroup;

  constructor(private fb:FormBuilder,private donService:DonService ){
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
              denyButtonText: `Don't save`
            }).then((result: { isConfirmed: any; isDenied: any; }) => {
               Read more about isConfirmed, isDenied below 
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
  }
 
}*/
}

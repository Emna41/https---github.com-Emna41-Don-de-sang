import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../model/model/model.component';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { ISang } from '../model/model/models/Demande';
import { HttpClient } from '@angular/common/http';
import { DonService } from '../services/don.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { SangComponent } from '../sang/sang.component';

@Component({
  selector: 'app-disp',
  standalone: true,
  imports: [ModelComponent,RouterLink,RouterLinkActive,CommonModule,SangComponent],
  templateUrl: './disp.component.html',
  styleUrl: './disp.component.css'
})
export class DispComponent implements OnInit {
  demands:ISang[]=[];
  data=[];
  constructor(private http: HttpClient, private donService: DonService) {}
  ngOnInit(): void {
    this.getInformation();
  }
  getInformation(){
    this.http.get<any>('http://localhost/api/demande_don.php').subscribe((response)=>{
      console.log("Got the data");
      console.log(response);
      this.demands=response;
    });
  }
  trackBy(index: number, demande: ISang): number {
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
        this.http.delete(`http://localhost/api/demande_don.php?id=${id}`).subscribe(() => {
          Swal.fire({
            title: "Supprimé!",
            text: "La demande a été supprimée avec succès.",
            icon: "success"
          }).then(() => {
            window.location.reload();
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
        this.http.put(`http://localhost/api/demande_don.php?id=${id}`, updatedDemand).subscribe(() => {
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
}

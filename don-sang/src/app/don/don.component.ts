import { Component, OnInit } from '@angular/core'; // importe les fonctionnalités nécessaires d'Angular pour définir un composant.
import { HttpClient } from '@angular/common/http'; //  Importe le service HttpClient d'Angular pour effectuer des requêtes HTTP.
import { Router } from '@angular/router'; // Importe le service Router d'Angular pour naviguer entre les différentes routes de l'application.
import { CommonModule } from '@angular/common'; //
import { NgModel } from '@angular/forms';// Importe la directive NgModel d'Angular pour lier les données des éléments de formulaire avec les propriétés du modèle.
import { FormsModule } from '@angular/forms'; //  Importe FormsModule d'Angular, qui fournit des fonctionnalités pour gérer les formulaires dans Angular.



@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css'],
  standalone:true,//composant autonome
  imports: [ CommonModule,FormsModule ],
}
)
export class DonComponent implements OnInit{ //DonComponent. Implémente l'interface OnInit pour exécuter une logique d'initialisation lorsque le composant est créé.
  formValues = { //Ces valeurs seront liées aux éléments de formulaire dans le template HTML.
    nom:'',
    username:'',
    localisation:'',
    rendez_vous: '',
    gender:'',
    numtel: '',
    banque:'',
    typesang: '',
    maladies:''
  };
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    const demande = this.formValues; 
    console.log(demande);
    this.http.post('http://localhost/api/demande_don.php', demande).subscribe((response:any) => {
       alert(response.message); //Méthode appelée lors de la soumission du formulaire. Récupère les valeurs du formulaire à partir de formValues, envoie une requête POST HTTP vers l'API à l'aide de HttpClient, puis écoute la réponse et affiche la réponse .
      });
  }
}

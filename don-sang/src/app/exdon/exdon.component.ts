import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-exdon',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],

  templateUrl: './exdon.component.html',
  styleUrl: './exdon.component.css'
})
export class ExdonComponent {
  constructor(private http: HttpClient, private router: Router) { }
  data: any[] = [];

  ngOnInit(): void {
    this.afficheDon();
  }
  afficheDon() {
  this.http.get<any[]>('http://localhost/api/don.php').subscribe(
    (response: any[]) => {
      this.data = response; 
      alert(response[0].message); 
    })

  }}

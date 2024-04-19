import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-exsang',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './exsang.component.html',
  styleUrl: './exsang.component.css'
})
export class ExsangComponent {
  constructor(private http: HttpClient, private router: Router) { }
  data: any[] = [];

  ngOnInit(): void {
    this.afficheSang();
  }
  afficheSang() {
  this.http.get<any[]>('http://localhost/api/sang.php').subscribe(
    (response: any[]) => {
      this.data = response; 
      alert(response[0].message); 
    })

  }
}

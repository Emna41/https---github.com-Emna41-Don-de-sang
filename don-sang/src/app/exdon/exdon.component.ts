import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.http.get('http://localhost/api/don.php').subscribe({
      next: (res: any) => {
        let msg = res.message;
        if (msg === 'success') {
        this.data = res.data; 
    
        } else {
          alert(res.msg);
        }
      },
      error: (error) => { console.log(error) }
    });

  }

  accepte(id:number){
    const headers=new  HttpHeaders({'Content-type':'application/json'});
    const body = { id: id };
    this.http.post(`http://localhost/api/don.php`, body, { headers }).subscribe(
      {

        next: (res:any)=>
          {
          let msg= res.message;
         if (msg=="error") {
             alert(res.msg);
           } else {
            this.afficheDon();
          }
         },
         error: (error)=>{console.log(error)}

  }
    );
  }

  supprime(id:number){
    const headers=new  HttpHeaders({'Content-type':'application/json'});
    this.http.delete(`http://localhost/api/don.php?id=${id}`,{headers}).subscribe(
      {

            next: (res:any)=>
              {
              let msg= res.message;
             if (msg=="error") {
                 alert(res.msg);
               } else {
                 this.afficheDon();
               }
             },
             error: (error)=>{console.log(error)}

      });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IDon } from '../model/model/models/Demande';

@Injectable({
  providedIn: 'root'
})
export class DonService {
  apiurl='http://localhost/api/demande_sang.php';
  constructor(private http:HttpClient) { }
  getAllDemands():Observable<any>{
    return this.http.get(this.apiurl);
  }
  getDemandebyId(id:any):Observable<any>{
    return this.http.get(this.apiurl)
  }
  createDemande(demande:IDon):Observable<any>{
    return this.http.post(this.apiurl,demande);
  }
  updateDemand(id:string,demande:IDon){
    return this.http.put<ApiResponse<IDon>>(
      `${this.apiurl}/${id}`,
      demande);
    }
  
  deleteDemand(id:string):Observable<any>{
    return this.http.delete(`${this.apiurl}/${id}` ); 
  }

}

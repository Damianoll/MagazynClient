import { Magazyn } from './../models/magazyn';
import { HttpClient } from '@angular/common/http';
import { Pracownik } from './../models/pracownik';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public getPracownicy(){
    return this.httpClient.get<Pracownik[]>('http://localhost:8080/pracownik');
  }

  public createPracownik(pracownik){
    return this.httpClient.post<Pracownik>("http://localhost:8080/pracownik", pracownik);
  }

  public deletePracownik(id){
    return this.httpClient.delete("http://localhost:8080/pracownik"+"/"+id);
  }

  public getPracownikById(id){
    return this.httpClient.get<Pracownik>("http://localhost:8080/pracownik"+"/"+id);
  }

  public editPracownik(id, pracownik){
    return this.httpClient.put<Pracownik>("http://localhost:8080/pracownik"+"/"+id, pracownik);
  }

  public getMagazyny(){
    return this.httpClient.get<Magazyn[]>('http://localhost:8080/magazyn');
  }

  public createMagazyn(magazyn: Magazyn){
    return this.httpClient.post<Magazyn>("http://localhost:8080/magazyn", magazyn);
  }

  public getMagazynById(id){
    return this.httpClient.get<Magazyn>("http://localhost:8080/magazyn"+"/"+id);
  }

  public editMagazyn(id, magazyn){
    return this.httpClient.put<Magazyn>("http://localhost:8080/magazyn"+"/"+id, magazyn);
  }

  public deleteMagazyn(id){
    return this.httpClient.delete("http://localhost:8080/magazyn"+"/"+id);

  }
}

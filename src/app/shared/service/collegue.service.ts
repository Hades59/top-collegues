import { Injectable } from '@angular/core';

import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CollegueService {

  // données en mémoire
  collegues:Collegue[] = []

  constructor(private http:HttpClient) { }

  listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
    return this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise()
    
    /*return new Promise((resolve, reject) => {
      if (this.collegues) {
        resolve(this.collegues);
      }
      else {
        reject(Error("La liste ne s'affiche pas!!!"));
      }    
    })*/
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue[]> {
    // TODO sauvegarder le nouveau collègue
    // TODO retourner l'objet Promise<Collegue[]>
    return this.http.post<Collegue[]>("http://localhost:8080/collegues", newCollegue, httpOptions).toPromise()
    /*return new Promise((resolve, reject) => {
      if (newCollegue && this.collegues) {
        this.collegues.push(newCollegue)
        resolve(newCollegue);
      }
      else {
        reject(Error("Sauvegarde impossible!!!"));
      }    
    })*/
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    unCollegue._score+=10
    return this.http.post<Collegue>('http://localhost:8080/collegues/'+ unCollegue._nom + '/score', unCollegue, httpOptions).toPromise()
    /*return new Promise((resolve, reject) => {
      if(unCollegue){
        resolve(unCollegue)
      }else{
        reject(Error("Erreur: aimer collegue"))
      }
    })*/
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Détester un collègue
    unCollegue._score-=5
    return this.http.post<Collegue>('http://localhost:8080/collegues/'+ unCollegue._nom + '/score', unCollegue, httpOptions).toPromise()
    /*return new Promise((resolve, reject) => {
      if(unCollegue){  
        resolve (unCollegue);
      }else{
        reject(Error("Erreur: détester collegue"))
      }   
    })*/
  }
}

import { Injectable } from '@angular/core';

import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class CollegueService {

  // données en mémoire
collegues: Subject<Collegue[]> = new BehaviorSubject([])
  colleguesTab:Collegue[] = []

  constructor(private http:HttpClient) { }

  refresh():void{
    this.http.get<Collegue[]>(`${environment.apiUrl}/collegues`)
    .subscribe(cols => this.collegues.next(cols))
  }

  listerCollegues():Observable<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
    this.refresh()
    return this.collegues.asObservable()
  }

  sauvegarder(newCollegue:Collegue):Observable<Collegue[]> {
    // TODO sauvegarder le nouveau collègue
    // TODO retourner l'objet Promise<Collegue[]>
    /*this.collegues.map(tab => {
      tab.push(newCollegue)
      return tab
    })*/

    this.http.post<Collegue[]>(`${environment.apiUrl}/collegues`, newCollegue, httpOptions)
    .subscribe(cols => {    
      this.colleguesTab.push(newCollegue)
      this.collegues.next(this.colleguesTab)
    })
    return this.collegues.asObservable()
  }

  aimerUnCollegue(unCollegue:Collegue):Observable<Collegue[]> {
    // TODO Aimer un collègue
    unCollegue._score+=10
    this.http.put<Collegue[]>(`${environment.apiUrl}/collegues/`+`${unCollegue._nom}/score`, {"avis":"jaime"}, httpOptions)
    .subscribe(col => {
      this.collegues.next(this.colleguesTab)
    })
    return this.collegues.asObservable()
  }

  detesterUnCollegue(unCollegue:Collegue):Observable<Collegue[]> {
    // TODO Détester un collègue
    unCollegue._score-=5
    this.http.put<Collegue[]>(`${environment.apiUrl}/collegues/`+`${unCollegue._nom}/score`, {"avis":"jedeteste"}, httpOptions)
    .subscribe(col => {
      this.collegues.next(this.colleguesTab)
    })
    return this.collegues.asObservable()
  }
}

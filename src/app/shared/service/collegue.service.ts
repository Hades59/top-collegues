import { Injectable } from '@angular/core';

import { Collegue } from '../domain/collegue';

@Injectable()
export class CollegueService {

  // données en mémoire
  collegues:Collegue[]

  constructor() { }

  listerCollegues():Promise<Collegue[]> {
    // TODO effectuer la liste des collègues
    // TODO retourner l'objet Promise<Collegue[]>
    return new Promise((resolve, reject) => {
      if (this.collegues) {
        resolve(this.collegues);
      }
      else {
        reject(Error("La liste ne s'affiche pas!!!"));
      }    
    })
  }

  sauvegarder(newCollegue:Collegue):Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue
    // TODO retourner l'objet Promise<Collegue[]>
    return new Promise((resolve, reject) => {
      if (newCollegue && this.collegues) {
        this.collegues.push(newCollegue)
        resolve(newCollegue);
      }
      else {
        reject(Error("Sauvegarde impossible!!!"));
      }    
    })
  }

  aimerUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Aimer un collègue
    unCollegue.score+=10
    return new Promise((resolve, reject) => {
      resolve (unCollegue);
    })
  }

  detesterUnCollegue(unCollegue:Collegue):Promise<Collegue> {
    // TODO Détester un collègue
    unCollegue.score-=5
    return new Promise((resolve, reject) => {
        resolve (unCollegue);   
    })
  }
}

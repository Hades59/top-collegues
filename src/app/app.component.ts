import { Component } from '@angular/core';
// TODO importer la classe Collegue
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import { BrowserPlatformLocation } from '@angular/platform-browser/src/browser/location/browser_platform_location';
import { CollegueService } from './shared/service/collegue.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // TODO Ajouter un champ collegues qui est de type Tableau de Collegue
  private collegue:Collegue[]
  affichAlert:boolean

  constructor(private collegueService:CollegueService) {
  }
  
  ngOnInit() {
  // TODO alimenter le tableau de collègues avec 5 collègues possédant des scores variés
  /*this.collegueService.sauvegarder(new Collegue("Pauline", "https://www.wikichat.fr/wp-content/uploads/sites/2/MAINE-COON.png",100))
  this.collegueService.sauvegarder(new Collegue("Clément", "https://www.robot-advance.com/ori-robot-maze-breaker-noir-silverlit-1885.jpg", 100))
  this.collegueService.sauvegarder(new Collegue("Nico", "https://pre00.deviantart.net/4916/th/pre/f/2017/053/c/5/vector__662___llama_kuzco_by_dashiesparkle-db00jr4.png", 100))
  this.collegueService.sauvegarder(new Collegue("Flo", "http://img.chien.com/img/races-de-chiens/47_big-chien-nu-chinois-crete.jpg", 100))  
  this.collegueService.sauvegarder(new Collegue("Benjamin", "https://www.franceinter.fr/s3/cruiser-production/2017/02/37a25524-e34f-494c-ad21-f836b012b9e7/640_taxte_robots_gettyimages-634461687.jpg", 100))
*/
  this.affichAlert=false

 // this.collegueService.listerCollegues().then(colle => this.collegue = colle, err=>console.log(err))
  }

  add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    this.collegueService.sauvegarder(new Collegue(pseudo.value,imageUrl.value,0))
    .subscribe(list => this.collegue = list)
    // TODO ajouter au tableau un nouveau collègue
    // TODO vider les champs de saisie
    this.affichAlert = true
    
    return false; // pour éviter le rechargement de la page
    }
}

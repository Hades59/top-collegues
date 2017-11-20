import { Component, OnInit } from '@angular/core';
import { Contener } from '../contener';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends Contener implements OnInit {

  limite:number
  filtre:string

  constructor(collegueService:CollegueService) { 
    super(collegueService)
  }

  onLimit($event){
    if ( $event.target.value == "" || $event.target.value == null) {
      this.limite=this.collegueService.collegues.length
    }else{
      this.limite=$event.target.value
    }
  }

  onFilter($event){
    if ( $event.target.value == "" || $event.target.value == null) {
      this.filtre=""
    }else{
      this.filtre=$event.target.value
    }
  }
}

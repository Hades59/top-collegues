import { Component, OnInit } from '@angular/core';
import { Contener } from '../contener';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends Contener implements OnInit {
  
  limite:number
  filtre:string

  constructor(collegueService:CollegueService) { 
    super(collegueService)

  }

  onLimit($event){
    if ( $event.target.value == "" || $event.target.value == null) {
      this.limite=this.collegue.length
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

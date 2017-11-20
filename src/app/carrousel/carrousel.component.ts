import { Component, OnInit } from '@angular/core';
import { Contener } from '../contener';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends Contener implements OnInit {
  
    constructor(collegueService:CollegueService) { 
      super(collegueService)
    }
  }

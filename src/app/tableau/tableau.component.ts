import { Component, OnInit } from '@angular/core';
import { Contener } from '../contener';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent extends Contener implements OnInit {
  
    constructor(collegueService:CollegueService) { 
      super(collegueService)
    }
  }

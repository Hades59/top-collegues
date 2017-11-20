import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

export class Contener {

 collegue:Collegue[] = [];


  constructor(public collegueService:CollegueService) { 

  }

  ngOnInit() {
    this.collegueService.listerCollegues().then(colle => this.collegue = colle, err=>console.log(err))
  }

  jaime(collegue:Collegue){
    collegue._score+=10
  }

  jeDeteste(collegue:Collegue){
    collegue._score-=5
  }
}
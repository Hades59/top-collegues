import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';

export class Contener {

 collegue:Collegue[] = [];


  constructor(public collegueService:CollegueService) { 

  }

  ngOnInit() {
    this.collegueService.listerCollegues()
    .subscribe(colle => this.collegue = colle, err=>console.log(err))
  }

  jaime(collegue:Collegue){
    //collegue._score+=10
    this.collegueService.aimerUnCollegue(collegue)
  }

  jeDeteste(collegue:Collegue){
    //collegue._score-=5
    this.collegueService.detesterUnCollegue(collegue)
  }
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueService } from './shared/service/collegue.service'

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltrePipe } from './shared/pipe/filtre.pipe';

const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
  { path: 'tableau', component: TableauComponent },
  { path: 'carrousel', component: CarrouselComponent },
  { path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
  ];

@NgModule({
  declarations: [
    AppComponent,
    ClassiqueComponent,
    TableauComponent,
    CarrouselComponent,
    ScorePipe,
    FiltrePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
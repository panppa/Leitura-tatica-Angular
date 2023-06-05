import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { XadrezComponent } from './components/xadrez/xadrez.component';
import { DamasComponent } from './components/damas/damas.component';
import { PokerComponent } from './components/poker/poker.component';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha.component';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'xadrez', component: XadrezComponent },{ path: 'damas', component: DamasComponent },{ path: 'poker', component: PokerComponent },{ path: 'damas', component: DamasComponent },{ path: 'jogoDaVelha', component: JogoDaVelhaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { XadrezComponent } from './components/xadrez/xadrez.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'xadrez', component: XadrezComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

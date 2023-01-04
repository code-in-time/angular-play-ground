import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApiConceptComponent } from './components/api-concept/api-concept.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api', component: ApiConceptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

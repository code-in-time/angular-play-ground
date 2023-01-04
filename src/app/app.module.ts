import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { TopComponent } from './components/top/top.component';
import { TheCounterComponent } from './components/the-counter/the-counter.component';
import { ThrottleThisDirective } from '../directive/throttlethis.directive';
import { HomeComponent } from './components/home/home.component';
import { ApiConceptComponent } from './components/api-concept/api-concept.component';
@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent,
    TopComponent,
    TheCounterComponent,
    ThrottleThisDirective,
    HomeComponent,
    ApiConceptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { SectionComponent } from './container/section/section.component';
import { SearchComponent } from './container/section/search/search.component';
import { AirlinesComponent } from './container/section/airlines/airlines.component';
import { AirportsComponent } from './container/section/airports/airports.component';
import { DatepickerModule } from 'ngx-bootstrap';
import { AirportsService } from './airports.service'
import { AirlinesService } from './airlines.service'
import { SearchresultService } from './searchresult.service';
import { SearchresultComponent } from './container/section/searchresult/searchresult.component';
import { ResultViewComponent } from './container/section/searchresult/result-view/result-view.component'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    SectionComponent,
    SearchComponent,
    AirlinesComponent,
    AirportsComponent,
    SearchresultComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule.forRoot()
  ],
  providers: [AirportsService, AirlinesService, SearchresultService],
  bootstrap: [AppComponent]
})
export class AppModule { }

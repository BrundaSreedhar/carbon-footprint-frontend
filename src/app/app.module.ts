import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapMainComponent } from './components/map-main/map-main.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { DataService } from './services/data.service';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MapMainComponent,
    UserFormComponent,
    HomeComponent,
    SocialComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCNcA5GQHiQ9BU7ATE_KmcqU78TUrMSrtM',
      libraries: ['places'] 
    }),
    AgmDirectionModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

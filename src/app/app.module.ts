import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AuthModule } from '@angular/fire/auth';
import { DatabaseModule} from '@angular/fire/database';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { WeatherDetailComponent } from './component/weather-detail/weather-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherDetailComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AuthModule,
    DatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

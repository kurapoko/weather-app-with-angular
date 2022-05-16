import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&exclude=hourly,daily&appid=${environment.apiKey}`;

  constructor(public http: HttpClient) { }

  getWhether(): Observable<Object> {
    return this.http.get(this.url);
  }

  getCurrentTemp(city: string, metric: 'metric' | 'imperial' = 'metric'): Subject<number> {
    const dataSubject = new Subject<number>();
    this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${metric}&APPID=${environment.apiKey}`)
      .subscribe((weather: any) => {
        console.log(weather);
        dataSubject.next(Math.round(Number(weather.main.temp)));
      });
    return dataSubject;
  }
}

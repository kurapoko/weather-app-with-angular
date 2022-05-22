import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private readonly weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
  private readonly apiKey = environment.apiKey;

  constructor(public http: HttpClient) { }

  /**
   * 天気の状態を都市名で取得する
   * @param city 都市名
   */
  getWhetherByCityName(city: string): Subject<any> {
    const dataSubject = new Subject<any>();
    this.http.get(`${this.weatherUrl}${city}&units=metric&APPID=${this.apiKey}`)
    .subscribe((data: any) => {
      console.log(data);
      dataSubject.next(data);
    });
    return dataSubject;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { WeatherService } from '../../service/weather.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  city = '';

  currentWeather: any;

  forecast: any;

  constructor(private route: ActivatedRoute, public weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
    })

    this.weatherService.getForecastByCityName(this.city).subscribe((weather) => {
      this.forecast = weather;
    });

    this.weatherService.getWhetherByCityName(this.city).subscribe((weather) => {
      this.currentWeather = weather;
    });
  }

}

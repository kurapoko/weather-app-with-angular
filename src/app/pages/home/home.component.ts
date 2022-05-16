import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weather:any;

  constructor( public weatherService: WeatherService ) { }

  ngOnInit(): void {
    this.weatherService.getWhether().subscribe(
      response => this.weather = response
    );

    this.weatherService.getCurrentTemp('london');
  }

  ngAfterViewChecked() {
    // console.log(this.weather$);
  }

}

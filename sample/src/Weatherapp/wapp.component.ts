import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'wapp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wapp.component.html',
  styleUrls: ['./wapp.component.css'],
})
export class WappComponent {
  weather: any = {};
  city: string = '';
  error: string = '';

  getWeather() {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=bd5e378503939ddaee76f12ad7a97608`
      )
      .then((response) => {
        this.weather = response.data;
        this.weather.main.temp = Math.round(this.weather.main.temp - 273)
        this.error='';
        if (this.weather.main.temp > 25) {
          alert("its hot here");
        }
        else if (this.weather.main.temp < 25 && this.weather.main.temp > 10) {
          alert("its mild cool here");
        }
        else if (this.weather.main.temp < 10) {
          alert("its cold here");
        }
      })
      .catch((error) => {
        // this.message = '';
        if (error.response.status == 404) {
          this.error = 'City not found';
        }
        this.weather = {};
        // console.error('Error fetching weather data:', error);
      });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  option1: any;
  option2: any;
  numValue: number;
  result: any;
  constructor() { }

  ngOnInit() {

  }
  convert(){

    const temperature = Number(this.numValue);
    if(this.option1 == "Fahrenheit"){
      if(this.option2 == "Celsius"){
      this.result = ((temperature * 9) / 5 + 32).toFixed(1);
      }
      else if(this.option2 == "Kelvin"){
        this.result = ((((temperature - 32) * 5) / 9) + 273.15).toFixed(1);
      }
      else{
        this.result = temperature
      }
    }
    else if(this.option1 == "Celsius"){
      if(this.option2 == "Fahrenheit"){
        this.result = ((temperature * 9) / 5 + 32).toFixed(1);
        }
        else if(this.option2 == "Kelvin"){
          this.result = (temperature + 273.15).toFixed(1);
        } 
        else{
          this.result = temperature
        }
    }
    else if(this.option1 == "Kelvin"){
      if(this.option2 == "Celsius"){
        this.result = (temperature - 273.15).toFixed(1);
        }
        else if(this.option2 == "Fahrenheit"){
          this.result = ((((temperature - 273.15) * 9) / 5) + 32).toFixed(1);

        } 
        else{
          this.result = temperature
        }
    }
  }
 
}

  



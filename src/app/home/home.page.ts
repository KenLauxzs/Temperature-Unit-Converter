import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  message = "Pls select option first.";
  constructor(private toastController: ToastController) { }

  ngOnInit() {

  }
  convert(){
  
    if(this.option1 == null){
      this.showErrorToast(this.message);
    }
    else if(this.option2 == null){
      this.showErrorToast(this.message);
    }
    else if(this.option1 == null && this.option2 == null){
      this.showErrorToast(this.message);
    }

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
  async showErrorToast(data: any) {
    let toast = this.toastController.create({
      message: data,
      duration: 3000,
      position: 'bottom'
    });
    (await toast).present();
  }
 
}

  



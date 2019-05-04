import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  nome;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.nome = localStorage.getItem('nome');
  }
  confirmName() {
    localStorage.setItem('nome', this.nome);
    
  }
}

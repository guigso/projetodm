import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  nome;
  constructor(public navCtrl: NavController, public tab: Tabs) {

  }
  ionViewDidEnter() {
    this.nome = localStorage.getItem('nome');
  }
  confirmName() {
    localStorage.setItem('nome', this.nome);
    this.tab.select(0);
  }
}

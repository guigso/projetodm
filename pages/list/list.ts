import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  imcList: Array<Object> = [];
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.imcList = JSON.parse(localStorage.getItem('imc'));
  }
}

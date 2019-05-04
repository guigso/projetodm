import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  imcList;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.initializeItems();
  }
  initializeItems() {
    this.imcList = JSON.parse(localStorage.getItem('imc'));
  }
  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.imcList = this.imcList.filter((item) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

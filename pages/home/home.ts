import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public fb: FormBuilder) {

  }
  imcForm: any;
  imc: any;

  ngOnInit() {
    const nome = localStorage.getItem('nome');
    this.imcForm = this.fb.group({
      name: new FormControl(
        nome ? nome : '',
        Validators.required
      ), weight: new FormControl(
        '',
        Validators.required
      ), height: new FormControl(
        '',
        Validators.required
      )
    })
  }

  ionViewDidEnter() {
    this.imcForm.controls.name.setValue(localStorage.getItem('nome'));
  }
  saveData() {
    if (this.imcForm.controls.height.value > 3) {
      this.imc = 'Insira uma altura válida'
    } else if (this.imcForm.controls.weight.value > 300) {
      this.imc = 'Insira um peso válido'
    } else {
      this.imc = this.imcForm.controls.weight.value / (this.imcForm.controls.height.value * this.imcForm.controls.height.value);
    }

    let attrs = {
      nome: this.imcForm.controls.name.value,
      peso: this.imcForm.controls.weight.value,
      altura: this.imcForm.controls.height.value,
      data: new Date().getTime(),
      imc: this.imc
    };
    let imcList = JSON.parse(localStorage.getItem('imc'));
    if (imcList && imcList.length > 0) {
      imcList.push(attrs);
    } else {
      imcList = [attrs];
    }
    localStorage.setItem('imc', JSON.stringify(imcList));
  }
}

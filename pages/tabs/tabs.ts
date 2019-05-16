import { Component, OnInit } from '@angular/core';

import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { FormControl, FormBuilder,Validators } from '@angular/forms';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = SearchPage;
  tab4Root = ConfigPage;
  hasName;
  nome;
  loginForm;
  constructor(    public formBuilder: FormBuilder,
) {

  }

  ngOnInit() {
    this.hasName = localStorage.getItem('nome');
    this.loginForm = this.formBuilder.group({
        nome: new FormControl('',
          Validators.required
        ),
        senha: new FormControl('',Validators.compose([Validators.required, Validators.minLength(6)])),

  })
  }
  confirmName() {
    console.log(this.loginForm.controls.nome.value);
    if(false) localStorage.setItem('nome', this.nome);
    this.hasName = this.nome;
  }
}

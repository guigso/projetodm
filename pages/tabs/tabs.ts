import { Component, OnInit } from '@angular/core';

import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
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
  errNome;
  errSenha;
  errSenhaLen;
  constructor(public formBuilder: FormBuilder,
  ) {

  }
  ngOnInit() {
    this.hasName = localStorage.getItem('nome');
    this.loginForm = this.formBuilder.group({
      nome: new FormControl('',
        Validators.required
      ),
      senha: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),

    })
  }
  confirmName() {
    console.log(this.loginForm.controls.nome.value);
    if (this.loginForm.status == 'VALID') {
      localStorage.setItem('nome', this.loginForm.controls.nome.value);
      this.errNome = false;
      this.errSenha = false;
      this.errSenhaLen = false;
      this.hasName = this.loginForm.controls.nome.value;
    } else {
      this.errNome = false;
      this.errSenha = false;
      if (this.loginForm.controls.nome.status != 'VALID') {
        this.errNome = true;
      }
      if (this.loginForm.controls.senha.status != 'VALID') {
        if (this.loginForm.controls.senha.value == '') {
          this.errSenha = true;
        } else if (this.loginForm.controls.senha.value.length < 6 ) {
          this.errSenhaLen = true;
        }

      }
    }
  }
}

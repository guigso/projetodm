import { Component, OnInit } from '@angular/core';

import { ListPage } from '../list/list';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = SearchPage;
  hasName;
  nome;
  constructor() {

  }

  ngOnInit() {
    this.hasName = localStorage.getItem('nome');
  }
  confirmName() {
    localStorage.setItem('nome', this.nome);
    this.hasName = this.nome;
  }
}

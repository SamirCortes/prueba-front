import { Component, OnInit } from '@angular/core';
import { Menu }  from '../../interfaces/IMenu';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Menu[] = [];

  constructor() { }

  ngOnInit(): void {

    this.menu = [
      {
        label:'inicio',
        redirect: '',
        active: true
      },
      {
        label:'nosotros',
        redirect: '',
        active: false
      },
      {
        label:'servicos',
        redirect: '',
        active: false
      },
      {
        label:'casos de éxito',
        redirect: '',
        active: false
      },
      {
        label:'únete al equipo',
        redirect: '',
        active: false
      },
      {
        label:'contacto',
        redirect:'',
        active: false
      }];
  }

  handleChangeItem(item: Menu){
    this.menu.find((m)=> m.active = false);
    item.active = true;
  }

}

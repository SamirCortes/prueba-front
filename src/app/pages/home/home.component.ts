import { Component, OnInit } from '@angular/core';

import { Clients } from '../../interfaces/IClients'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clients: Clients[] = []

  constructor() { }

  ngOnInit(): void {

    this.clients = [
      {
        url: 'https://media.istockphoto.com/photos/thoughtful-businessman-think-of-online-project-looking-at-laptop-picture-id1199696916?k=20&m=1199696916&s=612x612&w=0&h=uiwdsat42DM0tPOFUOcE3IKd3qrKk1OFno9YzA5wrmc=',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        nombre: 'Cristobal Fernandez',
        cargo: 'CEO Copec'
      },
      {
        url: 'https://media.istockphoto.com/photos/smiling-businesswoman-using-phone-in-office-picture-id1153863127?k=20&m=1153863127&s=612x612&w=0&h=P2Frhyi1KNn4C6YCBKfPIsfCTnSfbGanHJ1gHpPhnro=',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry adasd adtrthyt',
        nombre: 'Maria Paz Seger',
        cargo: 'Lead digital BBVA'
      },
      {
        url: 'https://media.istockphoto.com/photos/latin-man-using-smartphone-at-home-picture-id1223342919?k=20&m=1223342919&s=612x612&w=0&h=5zKDeFT3ciMcNN8xh44iwoR796W8fFhVrE_hF52U-lU=',
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry other person call car',
        nombre: 'Renato bascuñan',
        cargo: 'Lead Digital Chilena'
      }
    ]
  }

}

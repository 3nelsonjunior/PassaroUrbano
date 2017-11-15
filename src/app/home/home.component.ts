import { Component, OnInit } from '@angular/core';

import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //objeto ofertas do tipo Array[Ofertas] chamando o 
      //Serviço Ofertas para utilizar função getOfertas 
      //para buscar as ofertas
    //this.ofertas = this.ofertasService.getOfertas();

    //chama a classe da promessa(promise)
    this.ofertasService.getOfertas2()
      //(.then)executa ação qdo promessa for resolvida(resolve)
      //no recebe Array de Ofertas que é retornado do service
      .then(
        (ofertas: Oferta[]) => { this.ofertas = ofertas, console.log(this.ofertas)},
        //recebendo parametro erro - executando algo(log)
        (param: any) => { console.log(param) }
    )
  }

}

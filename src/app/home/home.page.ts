import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pathImgs = '../../assets/img/';

  public listaProdutos = [
    {
      codigo : '1',
      nome : 'Pizza 4 Queijos',
      categoria : 'Pizzas',
      descricao : 'Pizza de 4 Queijos com Mussarela, Provolone, Gorgonzola e Parmesão',
      valor : 55.00,
      imagem   : ['pizza.png']

    },
    {
      codigo : '2',
      nome : 'Empada de Palmito',
      categoria : 'Assados',
      descricao : 'Empada de Palmito',
      valor : 10.00,
      imagem   : ['empada.jpg']

    },
    {
      codigo : '3',
      nome : 'Hamburguer',
      categoria : 'Hamburguers',
      descricao : 'Hamburguer',
      valor : 22.00,
      imagem   : ['hamburguer.jpg']
    }
  ]

  constructor(private navCtrl: NavController) {}

  formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  
 
  

}

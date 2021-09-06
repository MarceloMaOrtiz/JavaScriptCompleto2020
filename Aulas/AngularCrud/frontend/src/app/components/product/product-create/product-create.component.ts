import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';

import { Product } from '../product.model'


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Exemplo para AtributoBind
  // atributoLegal = "qualquer"
  product = {name: ''} as Product

  // Com esse parâmetro é possível importar o serviço que é um Injectable
  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    // Dispara o sinal para o Observable do create(). Subscribe(), adiciona o
    //  observable, fazendo com que ao disparar o sinal da resposta, as funções
    //  dentro do subcribe são executadas
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

  // Exemplo para o EventBind
  // fazerAlgo(): void {
  //   console.log("Fazendo Algo!")
  // }

}

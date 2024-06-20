import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutosService } from '../services/produtos.service';
import { Personagem } from '../interfaces/personagem';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.scss'],
})
export class ProdutosPageComponent implements OnInit {
  listaStarWars = [];

  quantidadeDePersonagens = 0;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.quantidadeDePersonagens = this.produtosService.quantidadeDePersonagens;
  }

  carregar() {
    this.produtosService.buscarProdutos().subscribe((response: any) => {
      this.listaStarWars = response.results;

      this.quantidadeDePersonagens = response.count;
    });
  }

  limpar() {
    this.listaStarWars = [];
    this.quantidadeDePersonagens = 0;
  }
}

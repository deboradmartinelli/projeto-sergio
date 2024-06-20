import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss'],
})
export class MenuSuperiorComponent implements OnInit {
  quantidadeDePersonagens = 0;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {}

  atualizar() {
    this.quantidadeDePersonagens = this.produtosService.quantidadeDePersonagens;
  }
}

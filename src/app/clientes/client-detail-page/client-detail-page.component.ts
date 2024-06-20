import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';

import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-detail-page',
  templateUrl: './client-detail-page.component.html',
  styleUrls: ['./client-detail-page.component.scss'],
})
export class ClienteDetailComponent implements OnInit {
  clienteAtual: Cliente = null;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recuperarCliente();
  }

  recuperarCliente() {
    // RECUPERAR O ID DO CLIENTE PASSADO NA URL
    const id = this.route.snapshot.paramMap.get('id');

    // CHAMAR O SERVIÇO PARA RECUPERAR O CLIENTE
    this.clientesService
      .carregarClientePorId(id)
      .subscribe((response: Cliente) => {
        // ATRIBUIR O VALOR DO CLIENTE A VARIAVEL clienteAtual
        this.clienteAtual = response;
      });
  }
}

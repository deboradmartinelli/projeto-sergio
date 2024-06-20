import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from './shared/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './client-list-page.component.html',
  styleUrls: ['./client-list-page.component.scss'],
})
export class ClientListPage implements OnInit {
  listaDeClientes: Array<Cliente> = [];
  exibirModal: boolean = false;

  clienteSelecionado: Cliente = null;

  constructor(private clientesService: ClientesService) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.clientesService
      .carregarListaDeClientes()
      .subscribe((response: Cliente[]) => {
        this.listaDeClientes = response;

        console.log(this.listaDeClientes);
      });
  }

  abrirModal(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    this.exibirModal = true;
  }

  deletarCliente() {
    this.clientesService
      .deletarCliente(this.clienteSelecionado.id)
      .subscribe((response) => {
        this.exibirModal = false;
        this.carregarClientes();
      });
  }
}

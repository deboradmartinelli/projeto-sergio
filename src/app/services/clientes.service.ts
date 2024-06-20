import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../clientes/shared/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseUrl = 'http://localhost:8080/api/v1/cliente';

  constructor(private httpClient: HttpClient) {}

  public carregarListaDeClientes() {
    return this.httpClient.get(this.baseUrl);
  }

  public carregarClientePorId(id: string) {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  public salvarCliente(cliente: Cliente) {
    return this.httpClient.post(this.baseUrl, cliente);
  }

  public editarCliente(cliente: Cliente, id: string) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, cliente);
  }

  public deletarCliente(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}

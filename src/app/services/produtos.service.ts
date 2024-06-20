import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  quantidadeDePersonagens = 0;

  constructor(private httpClient: HttpClient) {}

  public buscarProdutos(): Observable<any> {
    return this.httpClient.get('http://swapi.dev/api/people').pipe(
      map((response: any) => {
        this.quantidadeDePersonagens = response.count;
        return response;
      }),
      catchError((error) => {
        console.log('falhou');
        return error;
      })
    );
  }
}

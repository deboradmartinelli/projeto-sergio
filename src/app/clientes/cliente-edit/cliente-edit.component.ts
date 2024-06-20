import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss'],
})
export class ClienteEditComponent implements OnInit {
  formCliente: FormGroup;
  showMsgError = false;

  constructor(
    private clientesService: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createform();
    this.recuperarCliente();
  }

  createform() {
    this.formCliente = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      genero: new FormControl(''),
      dataNascimento: new FormControl(''),
      observacao: new FormControl(''),
      inativo: new FormControl(false),
    });
  }

  recuperarCliente() {
    // RECUPERAR O ID DO CLIENTE PASSADO NA URL
    const id = this.route.snapshot.paramMap.get('id');

    // CHAMAR O SERVIÇO PARA RECUPERAR O CLIENTE
    this.clientesService
      .carregarClientePorId(id)
      .subscribe((response: Cliente) => {
        // ATRIBUIR O VALOR DO CLIENTE AO FORMULARIO
        response.dataNascimento = this.formatarData(response.dataNascimento);

        console.log(response);
        this.formCliente.setValue(response);
      });
  }

  formatarData(data: string) {
    let ano = new Date(data).getFullYear().toString();
    let mes = (new Date(data).getMonth() + 1).toString();
    if (mes.length == 1) {
      mes = '0' + mes;
    }
    let dia = (new Date(data).getDate() + 1).toString();
    if (dia.length == 1) {
      dia = '0' + dia;
    }
    return ano + '-' + mes + '-' + dia;
  }

  // METODO CHAMADO QUANDO O USUARIO CLICAR NO BOTAO SALVAR
  onSubmit() {
    // CRIEI UMA VARIAVEL CLIENTE COM O VALOR (OBJETO) DO FORMULARIO
    const cliente: Cliente = this.formCliente.value;

    // RECUPERAR O ID DO CLIENTE PASSADO NA URL
    const id = this.route.snapshot.paramMap.get('id');

    // CHAMAR O SERVIÇO PARA SALVAR O CLIENTE
    this.clientesService.editarCliente(cliente, id).subscribe((response) => {
      this.router.navigateByUrl('/clientes');
    });
  }
}

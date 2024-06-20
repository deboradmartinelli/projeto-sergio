import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-add-page',
  templateUrl: './client-add-page.component.html',
  styleUrls: ['./client-add-page.component.scss'],
})
export class ClientAddPage implements OnInit {
  formCliente: FormGroup;
  showMsgError = false;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createform();
  }

  createform() {
    this.formCliente = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      tipo: new FormControl(''),
      genero: new FormControl(''),
      dataNascimento: new FormControl(''),
      observacao: new FormControl(''),
      inativo: new FormControl(false),
    });
  }

  // METODO CHAMADO QUANDO O USUARIO CLICAR NO BOTAO SALVAR
  onSubmit() {
    // CRIEI UMA VARIAVEL CLIENTE COM O VALOR (OBJETO) DO FORMULARIO
    const cliente: Cliente = this.formCliente.value;

    // CHAMAR O SERVIÇO PARA SALVAR O CLIENTE
    this.clientesService.salvarCliente(cliente).subscribe((response) => {
      this.router.navigateByUrl('/clientes');
    });
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProdutosPageComponent } from './produtos-page/produtos-page.component';
import { ClientListPage } from './clientes/client-list-page.component';
import { ClientAddPage } from './clientes/client-add-page/client-add-page.component';
import { ClienteEditComponent } from './clientes/cliente-edit/cliente-edit.component';
import { ClienteDetailComponent } from './clientes/client-detail-page/client-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'personagens', component: ProdutosPageComponent },
  { path: 'clientes', component: ClientListPage },
  { path: 'clientes/cadastro', component: ClientAddPage },
  { path: 'clientes/:id', component: ClienteDetailComponent },
  { path: 'clientes/:id/editar', component: ClienteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

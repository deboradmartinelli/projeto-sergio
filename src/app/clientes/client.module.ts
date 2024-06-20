import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListPage } from './client-list-page.component';
import { ClientAddPage } from './client-add-page/client-add-page.component';
import { ClienteEditComponent } from './cliente-edit/cliente-edit.component';
import { ClienteDetailComponent } from './client-detail-page/client-detail-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [
    ClientListPage,
    ClienteDetailComponent,
    ClienteEditComponent,
    ClientAddPage,
  ],
})
export class ClientModule {}

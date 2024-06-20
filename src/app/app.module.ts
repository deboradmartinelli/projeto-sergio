import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProdutosPageComponent } from './produtos-page/produtos-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './categorias/categorias.component';

import { ClientModule } from './clientes/client.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    HomePageComponent,
    ProdutosPageComponent,
    CategoriasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http'

const appRoutes : Routes = [
  {
    path : '',
    loadChildren: () => import('../app/usuarios/usuarios.module').then( m => m.UsuariosModule) 
  },
  {
    path: '**',
    loadChildren: () => import('../app/usuarios/usuarios.module').then( m => m.UsuariosModule)
  }
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

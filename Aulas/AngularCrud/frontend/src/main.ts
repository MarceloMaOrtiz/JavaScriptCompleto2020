// Arquivo considerado o inicial = porta de entrada

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Carrega por padrão o AppModule, módulo da aplicação
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
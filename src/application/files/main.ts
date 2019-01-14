import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { <%= utils.classify(name) %>Module } from './<%= name %>/<%= name %>.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(<%= utils.classify(name) %>Module)
  // tslint:disable-next-line:no-console
  .catch((err) => console.log(err));

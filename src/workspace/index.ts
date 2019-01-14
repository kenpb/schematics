/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { strings } from '@angular-devkit/core';
import {
  Rule,
  apply,
  mergeWith,
  template,
  url,
  move,  
} from '@angular-devkit/schematics';

export default function (options: any): Rule {
  return mergeWith(apply(url('./files'), [
    template({
      utils: strings,
      ...options,
      'dot': '.',
    }),
    move(options.name)
  ]));
}

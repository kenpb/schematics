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
  schematic,
  chain,
} from '@angular-devkit/schematics';

export default function (options: any): Rule {
  return chain([
    schematic('workspace', options),
    schematic('application', options),
  ]);
}
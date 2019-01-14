import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url,
  template,
  noop,
  filter,
} from '@angular-devkit/schematics';
import {
  NodePackageInstallTask,
  RepositoryInitializerTask,
} from '@angular-devkit/schematics/tasks';

import { strings } from '@angular-devkit/core';

export default function (options: any): Rule {
  return (host: Tree, context: SchematicContext) => {
    options.sourcedir = options.sourcedir || 'src';
    options.selector = `${options.prefix}-root`

    if (!options.skipInstall) {
      context.addTask(new NodePackageInstallTask(options.name));
    }

    context.addTask(new RepositoryInitializerTask(options.name));

    return chain([
      mergeWith(
        apply(url('./files'), [
          options.routing ? noop() : filter((path) => !path.endsWith('__name__-routing.module.ts')),
          template({
            utils: strings,
            ...options,
            dot: '.',
          }),
          move(`${options.name}/${options.sourcedir}`)
        ])
      ),
      mergeWith(
        apply(url('./other-files'), [
          options.material ? noop() : filter((path) => !/material\//.test(path)),
          template({
            utils: strings,
            ...options,
            dot: '.',
          }),
          // dasherize just in case
          move(`${options.name}/${options.sourcedir}/${strings.dasherize(options.name)}`)
        ])
      ),
    ])(host, context);
  };
}
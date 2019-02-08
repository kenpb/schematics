import { Selector } from 'testcafe';

export class ExamplePage {

  paragraph: Selector;

  constructor () {
    const component = Selector('app-example-component');

    this.paragraph = component.find('#example');
  }
}

// import { waitForAngular } from 'testcafe-angular-selectors';
import { ExamplePage } from '../models/example-model';

const examplePage = new ExamplePage();

fixture `Example fixture`
  .page('http://localhost:4200/example')
  .beforeEach(async (/*t: any*/) => {
    // seems like it stopped working for version 6
    // await waitForAngular();
});

test('Example', async (t: any) => {
  await t
    .click(examplePage.paragraph)
    .expect(examplePage.paragraph.innerText).eql('Text changed!');
});

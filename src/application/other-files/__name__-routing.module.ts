import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'example',
    loadChildren: './modules/example/example.module#ExampleModule',
  },
  {
    path: '**',
    redirectTo: 'example',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class <%= utils.classify(name) %>RoutingModule { }
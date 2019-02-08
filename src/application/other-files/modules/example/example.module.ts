import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './components/example/example.component';
import { EXAMPLE_ROUTES } from './example-routing.module';

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    EXAMPLE_ROUTES,
  ]
})
export class ExampleModule { }

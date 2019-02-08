import { Routes, RouterModule } from "@angular/router";
import { ExampleComponent } from "./components/example/example.component";

const ExampleRoutes: Routes = [
  {
    path: '',
    component: ExampleComponent
  }
];

export const EXAMPLE_ROUTES = RouterModule.forChild(ExampleRoutes);

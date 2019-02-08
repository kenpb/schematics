import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.<%= style %>']
})
export class ExampleComponent implements OnInit {

  exampleText: String = "This is an example component";

  constructor() { }

  ngOnInit() { }

  example(): void {
    this.exampleText = "Text changed!"
  }

}

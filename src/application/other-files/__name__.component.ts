import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  templateUrl: './<%= name %>.component.html',
  styleUrls: ['./<%= name %>.component.<%= style %>']
})
export class <%= utils.classify(name) %>Component {
  title = '<%= name %>';
}

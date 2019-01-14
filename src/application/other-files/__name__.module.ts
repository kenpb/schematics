import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule, DEFAULT_BREAKPOINTS } from "@angular/flex-layout";
import { NgModule } from '@angular/core';<% if (material) { %>
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';<% } %><% if (routing) { %>
import { <%= utils.classify(name) %>RoutingModule } from './<%= name %>-routing.module';<% } %><% if (material) { %>
import { MaterialModule } from './material';<% } %>

import { <%= utils.classify(name) %>Component } from './<%= name %>.component';

@NgModule({
  declarations: [
    <%= utils.classify(name) %>Component
  ],
  imports: [
    BrowserModule<% if (material) { %>,
    BrowserAnimationsModule,
    MaterialModule<% } %><% if (routing) { %>,
    // https://github.com/angular/flex-layout/issues/846
    FlexLayoutModule.withConfig({ addFlexToParent: false }, DEFAULT_BREAKPOINTS),
    <%= utils.classify(name) %>RoutingModule<% } %>
  ],
  providers: [],
  bootstrap: [<%= utils.classify(name) %>Component]
})
export class <%= utils.classify(name) %>Module { }

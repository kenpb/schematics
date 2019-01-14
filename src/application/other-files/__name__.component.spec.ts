import { TestBed, async } from '@angular/core/testing';<% if (routing) { %>
import { RouterTestingModule } from '@angular/router/testing';<% } %>
import { <%= utils.classify(name) %>Component } from './<%= name %>.component';

describe('<%= utils.classify(name) %>Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({<% if (routing) { %>
      imports: [
        RouterTestingModule
      ],<% } %>
      declarations: [
        <%= utils.classify(name) %>Component
      ],
    }).compileComponents();
  }));

  it('should create the <%= name %>', async(() => {
    const fixture = TestBed.createComponent(<%= utils.classify(name) %>Component);
    const <%= name %> = fixture.debugElement.componentInstance;
    expect(<%= name %>).toBeTruthy();
  }));

  it(`should have as title '<%= name %>'`, async(() => {
    const fixture = TestBed.createComponent(<%= utils.classify(name) %>Component);
    const <%= name %> = fixture.debugElement.componentInstance;
    expect(<%= name %>.title).toEqual('<%= name %>');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(<%= utils.classify(name) %>Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('<%= name %> Works!');
  }));
});

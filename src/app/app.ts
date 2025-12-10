import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})
export class App {
  city = 'San Francisco';
}

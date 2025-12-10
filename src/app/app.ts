import { Component } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-root",
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [User],
})
export class App { }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Welcome to the {{name}}</h1>

  	<h2>Q1, What year did Arrested Development has a hit with Mr Wendal?</h2>

  `,
})
export class AppComponent  { name = 'Live Game Show'; }

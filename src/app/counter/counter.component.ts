import { Component } from '@angular/core';

let _count = 1;
@Component({
  selector: 'counter',
  template: `count: {{counter}}`,
  styles: [
    `
  :host{
    display: block;
  }`,
  ],
})
export class CounterComponent {
  counter = _count++;
}

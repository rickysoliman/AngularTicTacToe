import { Component, Input } from '@angular/core';

// component decorator
@Component({
  selector: 'app-square',
  template: `
    <button class="square">{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {
  
  @Input() value!: string;

}

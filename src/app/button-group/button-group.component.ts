import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import ButtonComponent from '../button/button.component';

@Component({
  selector: 'storybook-button-group',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div [ngClass]="orientation === 'horizontal' ? 'horizontal' : 'vertical'">
      <storybook-button
        *ngFor="let button of buttons"
        [primary]="button.primary"
        [backgroundColor]="button.backgroundColor"
        [size]="button.size"
        [label]="button.label"
        [disabled]="button.disabled"
        (clicked)="button.clicked.emit($event)"></storybook-button>
    </div>
  `,
  styles: [
    `
      .horizontal {
        display: flex;
        flex-direction: row;
      }
      .vertical {
        display: flex;
        flex-direction: column;
      }
    `
  ]
})
export default class ButtonGroupComponent {
  @Input() buttons: ButtonComponent[] = [];
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
}

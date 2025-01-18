import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
    type="button"
    [disabled]="disabled"
    (click)="onClick($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.css'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input() primary = false;

  /**
   * What background color to use
   */
  @Input() backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input() size: ButtonSize = ButtonSize.Medium;

  /**
   * Button contents
   *
   * @required
   */
  @Input() label = 'Button';

  /**
   * Optional click handler
   */
  @Output() clicked = new EventEmitter<Event>();

  /**
   * Is the button disabled?
   */
  @Input() disabled = false;


  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
  
  /**
   *  Handle the button click
   *  @param event 
   */
  onClick(event: Event): void {
    this.clicked.emit(event);
  }
}
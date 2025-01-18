import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="title" (click)="clickTitle($event)">{{ title }}</h1>
    <ng-content *ngIf="withContentRight"></ng-content>
  `,
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() title = '';
  @Input() withContentRight = false;

  @Output() doSomething = new EventEmitter<Event>();

  clickTitle(event: Event) {
    this.doSomething.emit(event); // This should trigger the action
  }

}


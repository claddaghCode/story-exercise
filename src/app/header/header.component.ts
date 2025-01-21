import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from '../utils/User.model';
import ButtonComponent from "../button/button.component";

@Component({
  selector: 'storybook-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export default class HeaderComponent {
  @Input() user: User | null = null;

  @Output() clickLogin = new EventEmitter<Event>();

  @Output() clickLogout = new EventEmitter<Event>();

  @Output() clickCreateAccount = new EventEmitter<Event>();

}

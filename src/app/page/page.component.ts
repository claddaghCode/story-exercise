import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import HeaderComponent from "../header/header.component";
import { User } from '../utils/User.model';

@Component({
  selector: 'storybook-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {
  user: User | null = null;

  logout(event: Event) {
    console.log('logout', event);
    this.user = null;
  }

  login(event: Event) {
    console.log('login', event);
    this.user = { name: 'Jane Doe' };
  }

  createAccount(event: Event) {
    console.log('create account', event);
    this.user = { name: 'Jane Doe' };
  }
}

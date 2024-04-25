import { Component } from '@angular/core';
import { CardsComponent } from '../shared/cards/cards.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    { title: 'withdraw', subtitle: 1 ,content:'withdraw',image: '../../assets/withdraw.jpg'},
  { title: 'restock', subtitle: 2,content:'restock' ,image: '../../assets/restock.jpg'},
  { title: 'overview', subtitle: 3,content:'overview',image: '../../assets/overview.jpg' }
  ]
  
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

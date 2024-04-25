import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [  MatCardModule,
   CommonModule,RouterModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() title: string =''
  @Input() route: string =''
  @Input() cards: { title: string, subtitle: number ,content:string,image:string}[] = [];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(public router:Router){

  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}

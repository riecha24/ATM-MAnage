import { Component } from '@angular/core';
import {AtmService}from '../shared/services/atm.service'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  denominations!: Map<number, number>;
  transactionHistory!: string[];

  constructor(private atmService: AtmService) {
    this.atmService.getDenominations().subscribe(denominations => {
      this.denominations = denominations;
    });
    this.atmService.getTransactionHistory().subscribe(history => {
      this.transactionHistory = history;
    });
  }
}

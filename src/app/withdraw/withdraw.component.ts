import { Component } from '@angular/core';
import { AtmService } from '../shared/services/atm.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  withdrawAmount!: number;
  withdrawalMessage!: string;

  constructor(private atmService: AtmService) {}

  withdraw(): void {
    if (!this.withdrawAmount || this.withdrawAmount <= 0) {
      this.withdrawalMessage = 'Please enter a valid amount.';
      return;
    }
    

    const success = this.atmService.withdraw(this.withdrawAmount);
    this.withdrawalMessage = success ? `Dispensed $${this.withdrawAmount}` : 'Insufficient Funds';
  }
}

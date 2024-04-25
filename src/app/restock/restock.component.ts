import { Component } from '@angular/core';
import { AtmService } from '../shared/services/atm.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatSelectChange, MatSelectModule} from '@angular/material/select'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'

@Component({
  selector: 'app-restock',
  standalone: true,
  imports: [CommonModule,FormsModule,MatSelectModule,MatSnackBarModule],
  templateUrl: './restock.component.html',
  styleUrl: './restock.component.scss'
})
export class RestockComponent {
  denominations: Map<number, number> = new Map<number, number>();
  selectedDenomination: number | undefined;
  quantityToRestock: number = 0;

  constructor(private atmService: AtmService,  private snackBar: MatSnackBar
  ) {
    this.atmService.getDenominations().subscribe(denominations => {
      this.denominations = denominations;
    });
  }

  restock(): void {
    if (this.selectedDenomination !== undefined && this.quantityToRestock > 0) {
      this.atmService.restock(this.selectedDenomination, this.quantityToRestock).subscribe(() => {
        this.snackBar.open('Restocking completed!', 'Close');
        this.quantityToRestock = 0; // Reset quantity input value to zero
      });
    }}

  onDenominationChange(event: MatSelectChange): void {
    this.selectedDenomination = event.value;
  }
}
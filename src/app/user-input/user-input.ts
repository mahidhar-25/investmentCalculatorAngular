import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { investmentServices } from '../app.services';
export interface AnnualInvestmentData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
})
export class UserInput {
  public investmentServices = inject(investmentServices);
  enableIntrestTable = output<boolean>();
  onCalculate() {
    this.enableIntrestTable.emit(true);
  }
}

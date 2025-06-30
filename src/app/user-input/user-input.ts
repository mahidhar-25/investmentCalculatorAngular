import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
})
export class UserInput {
  initialInvestment = 0;
  annualInvestment = 0;
  duration = 0;
  expectedReturn = 0;

  onCalculate() {
    const annualData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.initialInvestment + this.annualInvestment * year,
      });
    }
  }
}

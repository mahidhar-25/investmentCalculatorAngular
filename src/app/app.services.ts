import { Injectable, signal } from '@angular/core';
import { UserInput } from './user-input/user.model';
@Injectable({
  providedIn: 'root',
})
export class investmentServices {
  constructor() {}
  userInput = signal<UserInput>({
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0,
  });

  calculateInterest() {
    const annualData = [];
    let investmentValue = this.userInput().initialInvestment;

    for (let i = 0; i < this.userInput().duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.userInput().expectedReturn / 100);
      investmentValue +=
        interestEarnedInYear + this.userInput().annualInvestment;
      const totalInterest =
        investmentValue -
        this.userInput().annualInvestment * year -
        this.userInput().initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.userInput().annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.userInput().initialInvestment +
          this.userInput().annualInvestment * year,
      });
    }

    return annualData;
  }
}

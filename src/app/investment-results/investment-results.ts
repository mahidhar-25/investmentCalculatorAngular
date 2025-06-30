import { Component } from '@angular/core';
import { investmentServices } from '../app.services';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  constructor(private investmentServices: investmentServices) {}

  getInterestData() {
    return this.investmentServices.calculateInterest();
  }
}

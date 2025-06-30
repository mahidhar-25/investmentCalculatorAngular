import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header';
import { UserInputComponent } from './user-input/user-input';
import { investmentServices } from './app.services';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'investmentCalculator';
  showInterest = false;
  constructor(private investmentServices: investmentServices) {}
  enableInterestTable(value: boolean) {
    this.showInterest = value;
  }

  get getInterestData() {
    return this.investmentServices.calculateInterest();
  }
}

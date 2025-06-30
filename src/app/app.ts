import { Component } from '@angular/core';
import { HeaderComponent } from './header/header/header';
import { UserInput } from './user-input/user-input';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'investmentCalculator';
}

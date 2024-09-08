import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCalculatorComponent } from "./components/string-calculator/string-calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StringCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'string-calculator';
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { StringCalculatorService } from '../../services/string-calculator.service';

@Component({
  selector: 'app-string-calculator',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './string-calculator.component.html',
  styleUrls: ['./string-calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StringCalculatorComponent {

  result: number | null = null;
  errorMessage: string | null = null;
  input: string = '';
  calculatorService = inject(StringCalculatorService);

  calculate(): void {
    try {
      this.result = this.calculatorService.add(this.input);
      this.errorMessage = null;
    } catch (error: any) {
      this.errorMessage = error.message;
      this.result = null;
    }
  }
}

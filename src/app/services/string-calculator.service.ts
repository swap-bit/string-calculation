import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  add(inputVal: string): number {
    if (inputVal === '') {
      return 0;
    }

    const numbers = (inputVal.match(/-?\d+/g) || []).map(Number);
    // Filter out negative numbers
    const negativeNumbers = numbers.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numbers.reduce((acc, num) => acc + (num >= 0 ? num : 0), 0);

  }
}

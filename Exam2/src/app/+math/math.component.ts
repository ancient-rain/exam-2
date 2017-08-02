import { Component, OnInit } from '@angular/core';
import { MathGuard } from '../math.guard';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {
  numerator: number;
  denominator: number;
  answer: number;

  constructor(mathGuard: MathGuard) { 
    this.numerator = mathGuard.numerator;
    this.denominator = mathGuard.denominator;
    this.answer = mathGuard.answer;
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MathGuard implements CanActivate {
  numerator: number;
  denominator: number;
  answer: number;

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let url: string = state.url;
      let numbers: string[] = state.url.split('/');
      
      this.numerator = parseInt(numbers[2]);
      this.denominator = parseInt(numbers[3]);
      this.answer = this.numerator / this.denominator;

    if (!Number.isInteger(this.answer)) {
      this.router.navigate(['/bounced']);
    }

    return true;
  }
}

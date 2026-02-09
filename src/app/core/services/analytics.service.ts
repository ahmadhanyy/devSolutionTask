import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private analytics = [
    { icon: 'Icon_Total_Revenue.svg', title: 'Total Revenue', value: '$52.6k', trend: 3.4 },
    { icon: 'Icon_Today_Revenue.svg', title: 'Today Revenue', value: '$1024', trend: -5.5 },
    { icon: 'Icon_Sales.svg', title: 'Items Sold', value: 22 },
    { icon: 'Icon_Users.svg', title: 'Users Active', value: 11 },
  ];

  getAnalytics(): Observable<any[]> {
    return of(this. analytics);
  }
}

import { Component } from '@angular/core';
import { AnalyticsData } from '../../core/models/analytics';
import { AnalyticsCard } from '../analytics-card/analytics-card';
import { LineChart } from '../../shared/charts/line-chart/line-chart';
import { BarChart } from '../../shared/charts/bar-chart/bar-chart';
import { OrdersTable } from '../orders-table/orders-table';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AnalyticsCard, LineChart, BarChart, OrdersTable],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
    analytics: AnalyticsData[] = [
    { icon: 'Icon_Total_Revenue.svg', title: 'Total Revenue', value: '$52.6k', trend: 3.4 },
    { icon: 'Icon_Today_Revenue.svg', title: 'Today Revenue', value: '$1024', trend: -5.5 },
    { icon: 'Icon_Sales.svg', title: 'Items Sold', value: 22 },
    { icon: 'Icon_Users.svg', title: 'Users Active', value: 11 },
  ];
}

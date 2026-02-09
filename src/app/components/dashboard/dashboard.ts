import { Component, OnInit, signal } from '@angular/core';
import { AnalyticsData } from '../../models/analytics';
import { AnalyticsCard } from '../analytics-card/analytics-card';
import { LineChart } from '../line-chart/line-chart';
import { BarChart } from '../bar-chart/bar-chart';
import { OrdersTable } from '../orders-table/orders-table';
import { AnalyticsService } from '../../services/analytics.service'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AnalyticsCard, LineChart, BarChart, OrdersTable],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard implements OnInit  {
  analyticsList = signal<AnalyticsData[]>([]);

  constructor(private analyyicsServ: AnalyticsService){}

  ngOnInit() {
    this.analyyicsServ.getAnalytics().subscribe(
      (res: any) => {
        this.analyticsList.set(res);
      },
      (error) => {
        console.error(error)
      }
    );
  }
}

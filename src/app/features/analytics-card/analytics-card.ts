import { Component, Input } from '@angular/core';
import { AnalyticsData } from './../../core/models/analytics';

@Component({
  selector: 'app-analytics-card',
  standalone: true,
  imports: [],
  templateUrl: './analytics-card.html',
  styleUrls: ['./analytics-card.scss'],
})
export class AnalyticsCard {
  @Input() data! : AnalyticsData;
}

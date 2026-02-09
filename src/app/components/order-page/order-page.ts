import { Component, OnInit, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './order-page.html',
  styleUrls: ['./order-page.scss'],
})
export class OrderPage implements OnInit {

  orders = signal<Order[]>([]);
  page = signal(1);
  limit = 6;
  hasNext = signal(true);

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    const offset = (this.page() - 1) * this.limit;

    this.orderService.getOrders(offset, this.limit).subscribe({
      next: (res) => {
        this.orders.set(res);
        this.hasNext.set(res.length === this.limit);
      },
      error: (err) => console.error(err),
    });
  }

  nextPage() {
    if (!this.hasNext()) return;
    this.page.update(p => p + 1);
    this.loadOrders();
  }

  prevPage() {
    if (this.page() === 1) return;
    this.page.update(p => p - 1);
    this.loadOrders();
  }
}

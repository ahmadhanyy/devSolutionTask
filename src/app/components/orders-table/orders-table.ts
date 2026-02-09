import { Component, OnInit, signal } from '@angular/core';
import { Order, OrderStatus } from '../../models/order';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './orders-table.html',
  styleUrls: ['./orders-table.scss'],
})
export class OrdersTable implements OnInit {
  orderStatus = OrderStatus;
  ordersList = signal<Order[]>([]);
  page = signal(1);
  limit = 5;
  hasNext = signal(true);

  constructor(private orderServ: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    const offset = (this.page() - 1) * this.limit;

    this.orderServ.getOrders(offset, this.limit).subscribe({
      next: (res: Order[]) => {
        this.ordersList.set(res);
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

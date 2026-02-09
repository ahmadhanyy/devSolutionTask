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

  constructor(private orderServ: OrderService){}

  ngOnInit() {
    this.orderServ.getOrders().subscribe({
      next: (res) => {
        console.log('orders: ', res)
        this.ordersList.set(res)
      },
      error: (err) => console.error(err),
    });
  }

}

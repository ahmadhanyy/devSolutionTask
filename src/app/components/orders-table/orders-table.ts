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
        if (res.length == 0){
          let orders: Order[] = [
            {id: 1, images: [''], title: 'Iphone 13', description: 'Iphone 13 for limited time', price: 799, creationAt: new Date("2025-07-04")},
            {id: 2, images: [''], title: 'Iphone 14', description: 'Iphone 14 for limited time', price: 899, creationAt: new Date("2025-08-04")},
            {id: 3, images: [''], title: 'Iphone 15', description: 'Iphone 15 for limited time', price: 999, creationAt: new Date("2025-09-04")},
          ]
          this.ordersList.set(orders);
          this.hasNext.set(false);
        }
        else {
          this.ordersList.set(res);
          this.hasNext.set(res.length === this.limit);
        }
      },
      error: (err) => {
        console.error(err)
        let orders: Order[] = [
          {id: 1, images: [''], title: 'Iphone 13', description: 'Iphone 13 for limited time', price: 799, creationAt: new Date("2025-07-04")},
          {id: 2, images: [''], title: 'Iphone 14', description: 'Iphone 14 for limited time', price: 899, creationAt: new Date("2025-08-04")},
          {id: 3, images: [''], title: 'Iphone 15', description: 'Iphone 15 for limited time', price: 999, creationAt: new Date("2025-09-04")},
        ]
        this.ordersList.set(orders);
        this.hasNext.set(false);
      },
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

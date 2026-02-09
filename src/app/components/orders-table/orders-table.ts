import { Component } from '@angular/core';
import { Order, OrderStatus } from '../../models/order';
import { CurrencyPipe, DatePipe } from '@angular/common';


@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './orders-table.html',
  styleUrls: ['./orders-table.scss'],
})
export class OrdersTable {
  orderStatus = OrderStatus;
  orders: Order[] = [
  {
    imgUrl: 'iphone.png',
    name: 'IPhone 13',
    quantity: 1,
    orderDate: new Date('2022-01-20'),
    amount: 799,
    status: OrderStatus.Pending
  },
  {
    imgUrl: 'xaomi.png',
    name: 'Xiaomi Redmi Note 10',
    quantity: 1,
    orderDate: new Date('2022-01-20'),
    amount: 799,
    status: OrderStatus.Approved
  },
  {
    imgUrl: 'iphone.png',
    name: 'IPhone 13',
    quantity: 1,
    orderDate: new Date('2022-01-20'),
    amount: 799,
    status: OrderStatus.InProcess
  },
  ]

}

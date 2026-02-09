export interface Order {
  imgUrl: string;
  name: string;
  quantity: number;
  orderDate: Date;
  amount: number;
  status: OrderStatus;
}

export enum OrderStatus {
  Pending = 'Pending',
  Delivered = 'Delivered',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Cancelled = 'Cancelled',
  InProcess = 'In Process',
}

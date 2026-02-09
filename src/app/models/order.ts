export interface Order {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  creationAt: Date;
}

export enum OrderStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  InProcess = 'In Process',
}

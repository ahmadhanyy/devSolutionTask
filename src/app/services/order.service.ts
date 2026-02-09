import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(offset: number = 0, limit: number = 10): Observable<Order[]> {
    return this.http.get<Order[]>(
      `${this.baseUrl}?offset=${offset}&limit=${limit}`
    );
  }
}

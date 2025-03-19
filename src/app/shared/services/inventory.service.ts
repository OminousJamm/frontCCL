import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private readonly API_URL = 'http://localhost:5066/api/';
  private http = inject(HttpClient);

  getInventory(): Observable<product[]> {
    return this.http.get<product[]>(this.API_URL + 'Products');
  }

  
  updateQuantity(product: product): Observable<product>{
    return this.http.put<product>(this.API_URL+'Products/'+product.id, product);
  }
}

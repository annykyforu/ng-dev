import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FoodItem } from '../food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private url = "http://localhost:3000/food";

  constructor(private httpClient: HttpClient) { }

  getFoodItems() {
    return this.httpClient.get<FoodItem[]>(this.url);
  }

  addFoodItem(fi: FoodItem) {
    return this.httpClient.post<FoodItem>(this.url, fi);
  }

  editFoodItem(fi: FoodItem) {
    return this.httpClient.put<FoodItem>(`${this.url}/${fi.id}`, fi);
  }

  deleteFoodItem(id: number) {
    return this.httpClient.delete<FoodItem>(`${this.url}/${id}`);
  }

}

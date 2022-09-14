import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private httpClient: HttpClient) { }

  getFoodItems() {
    return this.httpClient.get<FoodItem[]>('/assets/food.json');
  }

}

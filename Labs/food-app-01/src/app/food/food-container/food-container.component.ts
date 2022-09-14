import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {
  constructor(private fs: FoodService) { }

  foodItems: FoodItem[] = [];
  current: FoodItem | null = null;

  ngOnInit() {
    this.fs.getFoodItems().subscribe((data) => {
      this.foodItems = data;
    });
  }

  onFoodItemSelected(fi: FoodItem) {
    this.current = {...fi};
  }

  onFoodItemSaved(fi: FoodItem){
    console.log('saving to service:', fi);
    const exists: FoodItem | undefined = this.foodItems.find((i) => i.id == fi.id);
    if (exists) {
      Object.assign(exists, fi);
    } else {
      this.foodItems.push(fi);
    }
    console.log('Food Items array after save', this.foodItems);
  }
}

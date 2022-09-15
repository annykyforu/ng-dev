import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {
  foodItems: FoodItem[] = [];
  selected: FoodItem | null = null;

  constructor(private fs: FoodService) { }

  ngOnInit() {
    this.fs.getFoodItems().subscribe((data) => this.foodItems = data);
  }

  addFoodItem(fi: FoodItem) {
    this.selected = fi;
  }

  selectFoodItem(fi: FoodItem) {
    this.selected = { ...fi };
  }

  saveFoodItem(fi: FoodItem) {
    console.log('saving to service:', fi);
    if(fi.id) {
      this.fs.editFoodItem(fi).subscribe((result) => {
        let existing = this.foodItems.find((fi => fi.id == result.id));
        if(existing) {
          Object.assign(existing, result);
          this.foodItems = [...this.foodItems];
        }
      });
    } else {
      this.fs.addFoodItem(fi).subscribe((result) => {
        this.foodItems.push(result);
        this.foodItems = [...this.foodItems];
      });
    }

    
    // const exists: FoodItem | undefined = this.foodItems.find((i) => i.id == fi.id);
    // if (exists) {
    //   Object.assign(exists, fi);
    // } else {
    //   this.foodItems.push(fi);
    // }
    this.selected = null;
    console.log('Food Items array after save', this.foodItems);
  }

  deleteFoodItem(fi: FoodItem) { 
    this.fs.deleteFoodItem(fi.id).subscribe(() => {
      let deleted = this.foodItems.filter((item) => item.id != fi.id);
      this.foodItems = [...deleted];
      this.selected = null;
    });
  }
}

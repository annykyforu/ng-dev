import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {
  constructor() { }

  @Input() foodItems: FoodItem[] = [];
  @Output() foodItemSelected = new EventEmitter<FoodItem>();

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodItems']) {
      console.log("There are some changes in Food Items:", changes['foodItems'].currentValue);
    }
  }

  selectFoodItem(fi: FoodItem) {
    this.foodItemSelected.emit(fi);
  }

}

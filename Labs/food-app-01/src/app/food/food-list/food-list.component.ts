import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
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

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'calories',
    'deleteFoodItem',
    'editFoodItem'
  ];
  dataSource = new MatTableDataSource([]);

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodItems']) {
      console.log("There are some changes in Food Items:", changes['foodItems'].currentValue);
    }
  }

  selectFoodItem(fi: FoodItem) {
    this.foodItemSelected.emit(fi);
  }

  editFoodItem(fi: FoodItem) {
    
  }

  deleteFoodItem(fi: FoodItem) {
    
  }

}

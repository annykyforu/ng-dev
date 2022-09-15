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
export class FoodListComponent implements OnInit, OnChanges {
  constructor() { }

  @Input() foodItems: FoodItem[] = [];
  @Output() foodItemSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output() foodItemDeleted: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output() foodItemAdded: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();


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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['foodItems']) {
      console.log("There are some changes in Food Items List:", changes['foodItems'].currentValue);
    }
    this.dataSource = new MatTableDataSource(changes["foodItems"].currentValue);
  }

  selectFoodItem(fi: FoodItem) {
    this.foodItemSelected.emit(fi);
  }

  deleteFoodItem(fi: FoodItem) {
    this.foodItemDeleted.emit(fi);
  }

  addFoodItem() {
    this.foodItemAdded.emit(new FoodItem());
  }
}

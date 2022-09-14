import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit, OnChanges {
  @Input() foodItem: FoodItem = new FoodItem();
  @Input() editMode: boolean = false;
  @Output() saveFoodItem: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit() {
    console.log(this.foodItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodItem']) {
      console.log('Updated Food Item:', changes['foodItem'].currentValue);
    }
  }

  doSave() {
    this.saveFoodItem.emit(this.foodItem);
  }

}

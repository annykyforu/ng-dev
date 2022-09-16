import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  foodAddItem,
  foodAddedItem,
  foodDeleteItem,
  foodDeleteResult,
  foodLoadData,
  foodUpdateItem,
  foodUpdatedItem,
  foodQueryItem } from './food.mocks';

import { FoodItem } from '../food.model';
import { FoodService } from './food.service';
import { AppComponent } from '../../app.component';
import { MatSlideToggleRequiredValidator } from '@angular/material/slide-toggle';

describe('FoodService - HttpTestingController', () => {
  let service: FoodService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodService]
    });

    service = TestBed.inject(FoodService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  })

  it('should return the initial load data from db', () => {
    service.getFoodItems().subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toBe(4);
      const firstFood = data.find((f) => f.id == 2);
      expect(firstFood).toEqual(foodQueryItem);

    });

    // test whether the correct url has been called using GET
    const url = `http://localhost:3000/food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('GET');
    // flush mock data
    req.flush(foodLoadData);
  });

  it('should add new Food Item', () => {
    service.addFoodItem(foodAddItem as FoodItem).subscribe((f) => {
      expect(f).toBeTruthy();
    });

    // test whether the correct url has been called using POST
    const url = `http://localhost:3000/food`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('POST');
    // flush mock data
    req.flush(foodAddedItem);    
  });

  it('should update existing Food Item', () => {
    service.editFoodItem(foodUpdateItem as FoodItem).subscribe((f) => {
      expect(f).toBeTruthy();
    });

    // test whether the correct url has been called using PUT
    const url = `http://localhost:3000/food/${foodUpdateItem.id}`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('PUT');
    // flush mock data
    req.flush(foodUpdatedItem);    
  });

  it('should delete existing Food Item', () => {
    service.deleteFoodItem(foodDeleteItem.id as number).subscribe((f) => {
      expect(f).toBeTruthy();
    });

    // test whether the correct url has been called using PUT
    const url = `http://localhost:3000/food/${foodDeleteItem.id}`;
    const req = controller.expectOne(url);
    expect(req.request.method).toEqual('DELETE');
    // flush mock data
    req.flush({});    
  });
});

import { FoodItem } from '../food.model';

// load data
export const foodLoadData: FoodItem[] = [
    { id: 1, name: 'Pad Thai', price: 5, calories: 250 },
    { id: 2, name: 'Butter Chicken', price: 7, calories: 275 },
    { id: 3, name: 'Cannelloni', price: 9, calories: 325 },
    { id: 4, name: 'Cordon Bleu', price: 15, calories: 400 },
];

export const foodQueryItem = { id: 2, name: 'Butter Chicken', price: 7, calories: 275 };

// Add
export const foodAddItem = { name: 'Gulasch', price: 11, calories: 325 };
export const foodAddedItem = { id: 5, name: 'Gulasch',  price: 11, calories: 325 };

// Update
export const foodUpdateItem = { id: 5, name: 'Gulasch', price: 9, calories: 350 };
export const foodUpdatedItem = { id: 5, name: 'Gulyas', price: 9, calories: 350 };

// Delete
export const foodDeleteItem = { id: 4, name: 'Cordon Bleu', price: 15, calories: 400 };

export const foodDeleteResult = [
    { id: 1, name: 'Pad Thai', price: 5, calories: 250 },
    { id: 2, name: 'Butter Chicken', price: 7, calories: 275 },
    { id: 3, name: 'Cannelloni', price: 9, calories: 325 },
    { id: 5, name: 'Gulasch',  price: 11, calories: 325 }
];
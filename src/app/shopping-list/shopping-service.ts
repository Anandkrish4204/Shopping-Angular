import { Ingredients } from '../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn:"root"})
export class ShoppingService{

    ingredients:Ingredients[] = [
        new Ingredients("Apples",5),
        new Ingredients("Oranges",10)
      ];

    ingregientsChangedEmitter = new EventEmitter<Ingredients[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient : Ingredients){
        this.ingredients.push(ingredient);
        this.ingregientsChangedEmitter.emit(this.ingredients.slice());
    }

    addIngredientArray(ingredientArray : Ingredients[]){
        this.ingredients.push(...ingredientArray);
        this.ingregientsChangedEmitter.emit(this.ingredients.slice());
    }
}
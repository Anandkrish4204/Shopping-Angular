import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from './shopping-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppingService:ShoppingService) { }

  ingredients:Ingredients[] = [];

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingregientsChangedEmitter.subscribe((ingredients:Ingredients[])=>{
      console.log("Addedd Successfully");
      this.ingredients = ingredients;
      alert("Items added to shopping list successfully !");
    });
  }
}

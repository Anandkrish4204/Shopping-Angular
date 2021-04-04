import { Component, OnInit} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingService } from '../shopping-service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService:ShoppingService) {}

  ngOnInit(): void {
  }

  addItems(name:HTMLInputElement,amount:HTMLInputElement){
    this.shoppingService.addIngredients(new Ingredients(name.value,parseInt(amount.value,10)));
  }

}

import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  recipes:Recipe[] = [];
  

  ngOnInit(): void {
    this.recipes =this.recipeService.getRecipe();
  }

}

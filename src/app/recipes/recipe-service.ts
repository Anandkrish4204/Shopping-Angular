import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class RecipeService{

    recipes:Recipe[] = [

        new Recipe(
            "Tandoori Roti",
            "The best bread that you can get!",
            "https://i1.wp.com/www.indianrecipeinfo.com/cooking/wp-content/uploads/2011/12/Tandoori-Roti.jpg?resize=1024%2C621&ssl=1",
            [new Ingredients("Wheat flour",2),new Ingredients("Baking powder",2),new Ingredients("Maida ",0.5),new Ingredients("Milk",0.5),new Ingredients("Yogurt curd",0.5),new Ingredients("Ghee",2),new Ingredients("Salt",0.5)]),
        new Recipe(
            "Egg Masala curry",
            "Curry that suits any main dish",
            "https://i.ndtvimg.com/i/2017-10/egg-recipes_806x605_51507698644.jpg",
            [new Ingredients("Turmeric",2),new Ingredients("eggs",4),new Ingredients("ginger-garlic paste ",1),new Ingredients("cumin seeds",1),new Ingredients("Green chilli",1),new Ingredients("Ginger",1),new Ingredients("onion",1)])
      ];

    recipeEmitter = new EventEmitter<Recipe>();

    getRecipe(){
        return this.recipes.slice();
    }


}
import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipes[];
  recipe: Recipes;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  foodClick(id: string){
    // console.log(this.recipesService.getRecipe(id));

    this.recipe = this.recipesService.getRecipe(id)
    console.log(this.recipe)
  }

}

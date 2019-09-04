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

  ionViewWillEnter(){
    console.log("Recipe Page will enter")
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log("Recipe Page did enter")
  }

  ionViewWillLeave(){
    console.log("Recipe Page will leave")
  }

  ionViewDidLeave(){
    console.log("Recipe Page did leave")
  }

  foodClick(id: string){
    // console.log(this.recipesService.getRecipe(id));

    this.recipe = this.recipesService.getRecipe(id)
    console.log(this.recipe)
  }

}

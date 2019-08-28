import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipes[] = [
    {
      id: "r1",
      title: "Gado-Gado",
      imageUrl: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8",
      ingredients: ["Longtong", "Sawi", "Bumbu Kecap", "Tauge"]
    },
    {
      id: "r2",
      title: "Nasi Goreng Ayam",
      imageUrl: "https://cdn0-production-images-kly.akamaized.net/MlelRXXAqOyKMFtoiyA68ZQhLMk=/469x0:1429x1280/680x906/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2730143/original/094669300_1550287561-rosalinda222_fried-2509089_1920.JPG",
      ingredients: ["Nasi", "Kecap", "Telur", "Daging Ayam"]
    },
    {
      id: "r3",
      title: "Ketoprak",
      imageUrl: "https://cdn0-production-images-kly.akamaized.net/hnwv3vhjRm9oMnkEiJ4hI03okog=/1703x0:4439x3649/680x906/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2719983/original/091893400_1549252630-shutterstock_1141107962.JPG",
      ingredients: ["Tauge", "Bihun", "Bumbu Kecap", "Kecap", "Tahu"]
    }
  ]

  constructor() { }

  getAllRecipes(){
    return this.recipes;
  }

  getRecipe(recipeId: string){
    // console.log(recipeId)
    return this.recipes.find(recipe => recipe.id == recipeId);
  }

  deleteRecipe(recipeId: string){
    
  }
}

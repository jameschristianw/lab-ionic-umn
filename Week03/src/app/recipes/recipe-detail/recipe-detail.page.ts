import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipes;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesSvc: RecipesService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')){
          return;
        }
        this.loadedRecipe = this.recipesSvc.getRecipe(paramMap.get('recipeId'))
      }
    )
  }
  
  ionViewWillEnter(){
    console.log("Recipe Detail Page will enter")
  }

  ionViewDidEnter(){
    console.log("Recipe Detail Page did enter")
  }

  ionViewWillLeave(){
    console.log("Recipe Detail Page will leave")
  }

  ionViewDidLeave(){
    console.log("Recipe Detail Page did leave")
  }

  deleteRecipe(){
    this.recipesSvc.deleteRecipe(this.loadedRecipe.id)
    this.router.navigate(['/recipes'])
    this.presentToast();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      buttons:[
        {
          text: 'Yes',
          handler: () => this.deleteRecipe()
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })

    await alert.present();
  }

  async presentToast() {
    // const toastController = document.querySelector('ion-toast-controller');
  
    const toast = await this.toastController.create({
      message: 'Recipe has been deleted.',
      duration: 2000
    });
    return await toast.present();
  }

}

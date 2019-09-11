import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  private place: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('placeId')){
          this.navCtrl.navigateBack('/places/tabs/discover')
          return;
        }
        this.place = this.placesService.getPlaceByID(paramMap.get('placeId'))
      }
    )
  }

  onBookPlace(){
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: {
        selectedPlace: this.place
      }
    })
    .then(modalEl => {
      modalEl.present()
      return modalEl.onDidDismiss()
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role)
      if(resultData.role === 'confirm'){
        console.log("BOOKED")
      }
    });
  }
}

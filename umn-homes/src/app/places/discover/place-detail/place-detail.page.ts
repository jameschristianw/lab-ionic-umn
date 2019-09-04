import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from '../../places.model';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';

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
    private router: Router,
    private navCtr: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('placeId')){
          return;
        }
        this.place = this.placesService.getPlaceByID(paramMap.get('placeId'))
      }
    )
  }

  bookThePlace(){
    console.log("Button Booking clicked");
    this.navCtr.pop()
    this.router.navigate(['/bookings'])
    this.placesService.addToList()
  }

}

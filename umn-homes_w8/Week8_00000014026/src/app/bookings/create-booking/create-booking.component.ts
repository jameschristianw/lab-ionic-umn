import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random'
  startDate: string
  endDate: string

  constructor(
    private modalCtrl: ModalController,
    private bookingSvc: BookingService
  ) { }

  ngOnInit() {
    console.log(this.selectedPlace.availableFrom)
    console.log(this.selectedPlace.availableTo)
    const availableFrom = new Date(this.selectedPlace.availableFrom)
    const availableTo = new Date(this.selectedPlace.availableTo)

    if(this.selectedMode === 'random'){
      this.startDate = new Date(
        availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime())
      ).toISOString()

      this.endDate = new Date(
        new Date(this.startDate).getTime() + Math.random() * (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())
      ).toISOString()
    }
    else{
      this.startDate = availableFrom.toUTCString();
      this.endDate = availableTo.toUTCString()
      console.log(this.startDate)
      console.log(this.endDate)
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

  onBookMyPlace(){
    this.modalCtrl.dismiss({
      message: "This is a dummy message!"
    },
    'confirm');
    this.bookingSvc.addToMyBookings(this.selectedPlace);
  }

}

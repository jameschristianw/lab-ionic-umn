import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';
import { BookingService } from '../booking.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random'
  @ViewChild('f', null) form: NgForm
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
      this.startDate = availableFrom.toISOString();
      this.endDate = availableTo.toISOString()
      console.log(this.startDate)
      console.log(this.endDate)
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookPlace() {
    if(!this.form.valid || !this.datesValid){
      return;
    }
    this.modalCtrl.dismiss({
      bookingData: {
        firstName: this.form.value['first-name'],
        lastName: this.form.value['last-name'],
        guestNumber: this.form.value['guest-number'],
        startDate: this.form.value['date-from'],
        endDate: this.form.value['date-to'],
      }
    }, 'confirm')

    // this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

  onBookMyPlace(){
    this.modalCtrl.dismiss({
      message: "This is a dummy message!"
    },
    'confirm');
    this.bookingSvc.addToMyBookings(this.selectedPlace);
  }

  datesValid(){
    const startDate = new Date(this.form.value['date-from'])
    const endDate = new Date(this.form.value['date-to'])

    return endDate > startDate;
  }
}

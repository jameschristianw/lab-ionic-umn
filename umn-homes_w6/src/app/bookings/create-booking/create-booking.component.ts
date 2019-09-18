import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/places.model';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place

  constructor(
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController
  ) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel')
  }

  onBookPlace(){
    this.loadCtrl.create({
      keyboardClose: true,
      message: "Booking the place..."
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss()
        this.modalCtrl.dismiss({message: 'Booked!'}, 'confirm')
      }, 2000);
    })

    // this.modalCtrl.dismiss({
    //   message: "This is a dummy message!",
    // },
    // 'confirm')
  }

}

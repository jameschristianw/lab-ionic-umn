import { Component, OnInit } from '@angular/core';
import { UKM } from './ukm.model';
import { UkmListService } from './ukm-list.service';
import { ModalController } from '@ionic/angular';
import { UkmModalComponent } from './ukm-modal/ukm-modal.component';

@Component({
  selector: 'app-ukm',
  templateUrl: './ukm.page.html',
  styleUrls: ['./ukm.page.scss'],
})
export class UkmPage implements OnInit {

  private UKM_LIST: UKM[]

  constructor(
    private UKMSvc: UkmListService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.UKM_LIST = this.UKMSvc.getAllUKM();
    console.log(this.UKM_LIST);
  }

  onJoin(ukm: UKM){
    console.log(ukm.id);
    //Tampilin modal
    this.modalCtrl
    .create({
      component: UkmModalComponent,
      componentProps: { selectedUKM: ukm}
    })
    .then(modalElement => {
      modalElement.present();
      return modalElement.onDidDismiss()
    });
  }

}

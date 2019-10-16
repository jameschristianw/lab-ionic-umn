import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UkmListService } from '../ukm-list.service';
import { UKM } from '../ukm.model';

@Component({
  selector: 'app-ukm-modal',
  templateUrl: './ukm-modal.component.html',
  styleUrls: ['./ukm-modal.component.scss'],
})
export class UkmModalComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private UKMSvc: UkmListService,
  ) { }

  ngOnInit() {}

  onCancel(){
    console.log("Yahh kamu gagal join UKM")
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onJoin(ukm: UKM){
    this.modalCtrl.dismiss({ message: "UKM Joined" }, 'confirm');
    console.log("Yeay kamu udah join UKM ini lohh!!");
    this.UKMSvc.addToMyUKM(ukm);
  }
}

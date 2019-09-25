import { Component, OnInit } from '@angular/core';
import { UKM } from '../ukm/ukm.model';
import { UkmListService } from '../ukm/ukm-list.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private myUKM: UKM[]

  constructor(private UKMSvc: UkmListService) { }

  ngOnInit() {
    this.myUKM = this.UKMSvc.getMyUKM();
    console.log(this.myUKM)
  }

  onExitUKM(ukm: UKM){
    this.UKMSvc.removeUKMFromMyList(ukm.id)
    this.myUKM = this.UKMSvc.getMyUKM();
  }

}

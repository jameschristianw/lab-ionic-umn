import { Injectable } from '@angular/core';
import { UKM } from './ukm.model';

@Injectable({
  providedIn: 'root'
})
export class UkmListService {

  private UKMS: UKM[] = [
    new UKM(1, "Badmin", "UKM Netral"),
    new UKM(2, "Basket", "UKM Overrated 2"),
    new UKM(3, "Tenis Meja", "UKM Underrated 1"),
    new UKM(4, "Futsal", "UKM Overrated 1"),
    new UKM(5, "Voli", "UKM Underrated 2"),
    new UKM(6, "Rencang", "UKM Penuh Drama"),
    new UKM(7, "Katak", "UKM Drama Beneran"),
    new UKM(8, "Ultima Sonora", "UKM Suara Merdu"),
  ]

  private myUKM: UKM[] = []

  constructor() { }

  getAllUKM(){
    return [...this.UKMS];
  }

  getUKM(id: number){
    return this.UKMS.filter( UKM => {
      return UKM.id == id;
    })
  }

  addToMyUKM(ukm: UKM){
    console.log("Added to MyUKM")
    this.myUKM.push(ukm);
  }

  getMyUKM(){
    return [...this.myUKM]
  }

  removeUKMFromMyList(id: number){
    this.myUKM = this.myUKM.filter(ukm => {
      return ukm.id != id;
    })
  }
}

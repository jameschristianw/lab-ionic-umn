import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Songs } from '../songs.model';
import { Album } from '../album.model';
import { SongModalComponent } from './song-modal/song-modal.component';
import { FavouriteService } from 'src/app/favourite/favourite.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.page.html',
  styleUrls: ['./song-list.page.scss'],
})
export class SongListPage implements OnInit {

  // private songs: Songs[] = []
  private album: Album

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private albumSvc: AlbumsService,
    private modalCtrl: ModalController,
    private loadCtrl: LoadingController,
    private favSvc: FavouriteService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('albumId')) {
        this.navCtrl.navigateBack('/');
        return;
      }
      this.album = this.albumSvc.getSingleAlbum(paramMap.get('albumId'));
      console.log(this.album)
    })
  }

  loveClick(song: Songs, album: Album){
    console.log("Love Click")
    console.log("Pak, saya gatau kenapa yg heart yg outline ga keluar.. saya udah coba ion-md-heart-outline, ios-md-outline tp tetep ngga keluar. jadi saya pake ini aja ya pak. kan yang penting warnanya ganti. (kecuali klo tujuannya ganti icon)")
    console.log(song)
    this.loadCtrl.create({
      keyboardClose: true, message: 'Updating your favourite songs...'
    })
    .then(loadElement => {
      loadElement.present()
      setTimeout(() => {
        loadElement.dismiss();
        if(song.fav == false){
          this.favSvc.addToFav(song)
          song.fav = true;
        }
        else if(song.fav == true){
          this.favSvc.removeFromFav(song)
          song.fav = false
        }
        console.log(this.albumSvc.getFavSongs())
      }, 1000);
    })

  }
}

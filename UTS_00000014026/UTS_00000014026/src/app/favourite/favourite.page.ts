import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../music-library/albums.service';
import { Songs } from '../music-library/songs.model';
import { FavouriteService } from './favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  private favSongs: Songs[]

  constructor(private albumSvc: AlbumsService,
    private favSvc: FavouriteService
    ) { }

  ngOnInit() {
    this.favSongs = this.favSvc.getFavSongs()
  }

  isFavEmpty(){
    if(this.favSongs.length == 0){
      return true;
    }
    else return false;
  }

}

import { Injectable } from '@angular/core';
import { Songs } from '../music-library/songs.model';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private favSongs: Songs[] = []

  constructor() { }

  addToFav(song: Songs){
    this.favSongs.push(song)
  }

  removeFromFav(song: Songs){
    this.favSongs = this.favSongs.filter(f => {
      return f != song
    })
  }

  getFavSongs(){
    return [...this.favSongs]
  }
}

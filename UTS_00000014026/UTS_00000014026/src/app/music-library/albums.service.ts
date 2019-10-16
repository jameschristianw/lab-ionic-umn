import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { Songs } from './songs.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private songs1: Songs[] = [
    new Songs('a1s1', 'I don\'t love you', 3, 59, false),
    new Songs('a1s2', 'Teenagers', 2, 42, false),
    new Songs('a1s3', 'Welcome to the Black Parade', 5, 11, false),
    new Songs('a1s4', 'This is How I Disappear', 3, 59, false),
    new Songs('a1s5', 'House of Wolves', 3, 59, false)
  ]

  private songs2: Songs[] = [
    new Songs('a2s1', 'I might', 4, 16, false),
    new Songs('a2s2', 'Me & You', 4, 4, false),
    new Songs('a2s3', 'Day 1', 3, 54, false),
    new Songs('a2s4', 'I Got You', 3, 32, false),
  ]

  private songs3: Songs[] = [
    new Songs('a3s1', 'Pejantan Tangguh', 3, 27, false),
    new Songs('a3s2', 'Itu Aku', 4, 39, false),
    new Songs('a3s3', 'Pemuja Rahasia', 3, 53, false),
    new Songs('a3s4', 'Pilihlah Aku', 4, 22, false),
    new Songs('a3s5', 'Generasi Patah Hati', 5, 6, false),
    new Songs('a3s6', 'Ketidakwarasan Padaku', 3, 53, false),
  ]

  private albums: Album[] = [
    new Album("a1", "Welcome to the Black Parade", "My Chemical Romance", "https://i.ibb.co/2vMvvNP/Screen-Shot-2019-09-23-at-13-06-40-PM.png", this.songs1),
    new Album('a2', 'Love Me / Love Me Not', 'HONNE', 'https://i.ibb.co/stR16bb/Screen-Shot-2019-09-23-at-13-06-57-PM.png', this.songs2),
    new Album('a3', 'Pejantan Tangguh', 'Sheila on 7', 'https://i.ibb.co/QQ6MP8J/Screen-Shot-2019-09-23-at-13-06-25-PM.png', this.songs3)
  ]

  private favouriteSongs: Songs[] = [];

  constructor() { }

  getAllAlbums(){
    return [...this.albums];
  }

  getSingleAlbum(id:string){
    return this.albums.find(a => {
      return a.id === id
    })
  }

  getFavSongs(){
    return [...this.favouriteSongs];
  }

  addToFav(song: Songs){
    this.favouriteSongs.push(song)
  }

  removeFromFav(song: Songs){
    this.favouriteSongs = this.favouriteSongs.filter(f => {
      return f != song
    })
  }
}

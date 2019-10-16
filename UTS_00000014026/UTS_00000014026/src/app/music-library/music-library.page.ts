import { Component, OnInit } from '@angular/core';
import { Album } from './album.model';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-music-library',
  templateUrl: './music-library.page.html',
  styleUrls: ['./music-library.page.scss'],
})
export class MusicLibraryPage implements OnInit {

  private albums: Album[] = [];

  constructor(private albumSvc: AlbumsService) { }

  ngOnInit() {
    this.albums = this.albumSvc.getAllAlbums()
  }

  onAlbumClick(id: string){
    
  }

}

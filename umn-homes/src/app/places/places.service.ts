import { Injectable } from '@angular/core';
import { Place } from './places.model'

@Injectable({
  providedIn: 'root'
})

export class PlacesService {
  private places: Place[] = [
    new Place(
      "p1", 
      "Serpong m-Town", 
      "2BR apartement near Summarecon Mall Serpong",
      "http://www.jual-apartemen.com/images3/26358_6.jpg",
      70000000),
    new Place(
      "p2", 
      "Apartement Scientia", 
      "2BR apartement near Multimedia Nusantara University",
      "https://img.rea-asia.com/rumah123/250x250-crop/apartment/ap18/1892427/original/aps1892427-apartemen-di-jual-di-gading-serpong-scientia-garden-tangerang-15575955063293.jpg",
      15000000),
    new Place(
      "p3", 
      "Serpong m-Town", 
      "2BR apartement near Summarecon Mall Serpong",
      "https://img.rea-asia.com/rumah123/250x250-crop/apartment/ap18/1892427/original/aps1892427-apartemen-di-jual-di-gading-serpong-scientia-garden-tangerang-15575955063293.jpg",
      70000000),
    new Place(
      "p4", 
      "Serpong m-Town", 
      "2BR apartement near Summarecon Mall Serpong",
      "https://img.rea-asia.com/rumah123/250x250-crop/apartment/ap18/1892427/original/aps1892427-apartemen-di-jual-di-gading-serpong-scientia-garden-tangerang-15575955063293.jpg",
      70000000),
    new Place(
      "p5", 
      "Serpong m-Town", 
      "2BR apartement near Summarecon Mall Serpong",
      "https://img.rea-asia.com/rumah123/250x250-crop/apartment/ap18/1892427/original/aps1892427-apartemen-di-jual-di-gading-serpong-scientia-garden-tangerang-15575955063293.jpg",
      70000000),
  ] 

  constructor() { }

  getAllPlaces(){
    return [...this.places]
  }
}

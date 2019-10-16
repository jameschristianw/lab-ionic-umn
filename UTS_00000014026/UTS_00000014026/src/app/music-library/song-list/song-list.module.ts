import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SongListPage } from './song-list.page';
import { SongModalComponent } from './song-modal/song-modal.component';

const routes: Routes = [
  {
    path: '',
    component: SongListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SongListPage, SongModalComponent],
  entryComponents: [SongModalComponent]
})
export class SongListPageModule {}

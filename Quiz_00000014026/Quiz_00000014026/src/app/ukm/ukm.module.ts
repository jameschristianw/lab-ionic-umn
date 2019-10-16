import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UkmPage } from './ukm.page';
import { UkmModalComponent } from './ukm-modal/ukm-modal.component';

const routes: Routes = [
  {
    path: '',
    component: UkmPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UkmPage, UkmModalComponent],
  entryComponents: [UkmModalComponent]
})
export class UkmPageModule {}

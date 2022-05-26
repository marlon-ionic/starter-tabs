import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WithIonContentComponent } from '../with-ion-content/with-ion-content.component';
import { WithoutIonContentComponent } from '../without-ion-content/without-ion-content.component';



@NgModule({
  declarations: [
    WithIonContentComponent,
    WithoutIonContentComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    WithIonContentComponent,
    WithoutIonContentComponent
  ]
})
export class ModalsModule { }

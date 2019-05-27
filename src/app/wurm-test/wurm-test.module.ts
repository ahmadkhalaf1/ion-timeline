import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WurmTestPage } from './wurm-test.page';

import { ComponentModules } from '../components/components.modules';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentModules,
    RouterModule.forChild([{ path: '', component: WurmTestPage }]),
  ],
  declarations: [WurmTestPage]
})
export class WurmTestPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineItemComponent } from './timeline/timeline.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [
    TimelineComponent,
    TimelineItemComponent
  ],
  exports: [
    TimelineComponent,
    TimelineItemComponent
  ]
})
export class ComponentModules {}

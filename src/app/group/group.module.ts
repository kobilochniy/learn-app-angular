import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {routes} from './group.routes';
import {GroupPageComponent} from './group-page/group-page.component';


@NgModule({
  declarations: [GroupPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GroupModule {
}

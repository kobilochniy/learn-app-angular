import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from './footer/footer.component';
import {TestComponent} from './test/test.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UrlPrefixInterceptorService} from './intercepter/url-prefix-interceptor.service';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UrlPrefixInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

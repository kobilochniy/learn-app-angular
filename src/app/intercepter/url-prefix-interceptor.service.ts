import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class UrlPrefixInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith('../assets')) {
      return next.handle(request);
    }

    if (request.url.startsWith('http')) {
      return next.handle(request);
    }
    return next.handle(request.clone({url: environment.api + request.url}));
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private server: HttpClient) {
  }

  public findAllLanguage(): Observable<any> {
    return this.server.get('api/language');
  }
}

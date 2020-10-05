import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../model/group';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private server: HttpClient) {
  }

  public findAllGroup(): Observable<Group[]> {
    return this.server.get<Group[]>('api/group').pipe(map(value => value['data']));
  }

  getSelectGroup(): Group {
    return null;
  }
}

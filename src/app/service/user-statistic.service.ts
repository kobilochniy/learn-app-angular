import {Injectable} from '@angular/core';
import {UserStatistic} from '../model/user-statistic';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatisticService {

  userSubject = new Subject<UserStatistic>();

  constructor() {
  }

  getUserStatistic(): Observable<UserStatistic> {
    return this.userSubject;
  }

  private emitUserStatistic(): void {
    this.userSubject.next(new UserStatistic(localStorage.getItem('learning.resultsCountCorrect'), localStorage.getItem('learning.resultsCountAll')));
  }

  addAnswerResult(result: boolean): void {
    if (result) {
      let resultsCountCorrect = Number(localStorage.getItem('learning.resultsCountCorrect'));
      if (!resultsCountCorrect) {
        resultsCountCorrect = 1;
      } else {
        resultsCountCorrect = resultsCountCorrect + 1;
      }
      localStorage.setItem('learning.resultsCountCorrect', String(resultsCountCorrect));
      this.emitUserStatistic();
    }
  }

  incWord(): void {
    let resultsCountCorrect = Number(localStorage.getItem('learning.resultsCountAll'));
    if (!resultsCountCorrect) {
      resultsCountCorrect = 1;
    } else {
      resultsCountCorrect = resultsCountCorrect + 1;
    }
    localStorage.setItem('learning.resultsCountAll', String(resultsCountCorrect));
    this.emitUserStatistic();
  }
}

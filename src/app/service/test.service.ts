import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from '../model/test';
import {TestAnswer} from '../model/test-answer';
import {map} from 'rxjs/operators';
import {UserStatisticService} from './user-statistic.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private server: HttpClient,
              private userStatisticService: UserStatisticService) {
  }

  public findAllTest(): Observable<Test> {
    return this.server.get<Test>('api/test');
  }

  sendAnswer(answerId: string, wordId: string): Observable<TestAnswer> {
    const formData = this.createAnswerFormData(wordId, answerId);
    return this.server.post<TestAnswer>('api/test', formData)
      .pipe(map(value => {
        this.userStatisticService.incWord();
        this.userStatisticService.addAnswerResult(value.result);
        return value;
      }));
  }

  private createAnswerFormData(wordId: string, answerId: string): FormData {
    const formData = new FormData();
    formData.append('wordId', wordId);
    formData.append('answerId', answerId);
    return formData;
  }
}

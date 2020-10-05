import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../service/language.service';
import {TestService} from '../service/test.service';
import {Test} from '../model/test';
import {switchMap, tap} from 'rxjs/operators';
import {UserStatisticService} from '../service/user-statistic.service';
import {Observable} from 'rxjs';
import {UserStatistic} from '../model/user-statistic';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test: Test;
  userStatistic$: Observable<UserStatistic>;
  result: boolean;
  currentWord: any;

  constructor(private languageService: LanguageService,
              private testService: TestService,
              private userStatisticService: UserStatisticService) {
  }

  ngOnInit(): void {
    this.initData();
    this.loadTest();
    this.userStatistic$ = this.userStatisticService.getUserStatistic();
  }

  loadTest(): void {
    this.testService.findAllTest().subscribe(value => this.test = value);
  }

  sendAnswer(answerId: string): void {
    this.testService.sendAnswer(answerId, this.test.word.id)
      .pipe(
        tap(value => {
          this.result = value['result'];
          this.currentWord = value['word'];
        }),
        switchMap(value => this.testService.findAllTest()))
      .subscribe(value => this.test = value);
  }

  private initData() {

  }
}

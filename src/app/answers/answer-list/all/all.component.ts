import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Question } from '../../../shared/question.model';
import { AnswerService } from '../../../shared/answer.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public questions: Question[] = [];

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.answerService.getAnswers(params['id']).subscribe(data => {
          for (const question of data) {
            this.questions.push(new Question(question));
          }
        });
      }
    });
  }
}

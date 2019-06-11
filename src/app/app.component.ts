import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TriviaProject';

  questions: any;
  scores: any;

  constructor(private apiService: ApiService) {
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
    this.apiService.getScores().subscribe(response => {
      this.scores = response;
      console.log(this.scores);
    });

  }

}

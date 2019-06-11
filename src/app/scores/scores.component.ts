import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  scores: any;
  questions: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getScores().subscribe(response => {
      this.scores = response;
    }); 
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
  }

}

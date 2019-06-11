import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  questions: any;
  scores: any;
  score: number;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.score = this.apiService.finalScore;
    this.apiService.getScores().subscribe(response => {
      this.scores = response;
      console.log(this.scores);
    }); 
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
}
  
}


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions: any;
  nameList: any;

  constructor(private apiService: ApiService) { 
    this.apiService.getQuestions().subscribe(response => {
      this.questions = response;
      console.log(this.questions);
    });
    
  }

  ngOnInit() { }

  // addNewName(newName) {
  //   this.apiService.addNewName(newName.value).subscribe(response => {
  //     this.nameList = response;
  //     console.log(newName.value);    
  //   });
  // }

  submitAnswers(form){
    console.log(form);
    this.apiService.getScore(form, this.questions);
    console.log(form.value.username);
  }

};

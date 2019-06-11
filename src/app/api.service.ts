import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  questions: any;
  finalScore: number = 0;
  username: string;

  constructor(private http: HttpClient, private router: Router) { }
  
    getQuestions() {
      return this.http.get("/api/questions", {responseType: "json"});
    }

    getScores() {
      return this.http.get("/api/scores", {responseType: "json"});
    }

   postScores(newScore) {
      return this.http.post("/api/scores", newScore, {responseType: "json"});
    }

    addNewName(newName){
      return this.http.post("/api/scores", newName, {responseType: "json"});
    }

    getScore(form, questions){
      let answerArray = Object.values(form.value);
      // console.log(form.value);
      // console.log(Object.values(form.value));
      for (let i=1; i < answerArray.length; i++) {
        if (answerArray[i] == questions[i-1].answer) {
          console.log ("got one right");
          this.finalScore++
        }
      }
      console.log(this.finalScore);
      this.router.navigate(['/results']);
      this.postScores({ username: form.value.username, scores: this.finalScore}). subscribe(response => {
        questions=response
      });
    }

}

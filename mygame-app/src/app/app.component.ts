import { Component } from '@angular/core';

export class Question {
	questionNumber: number;
	questionText: string;
	answers: any;	
}

export class Answer {
	answerid: string;
	answerText: string;	
}

const QUESTIONS: Question[] = [
	{
		questionNumber: 1,
	  	questionText: 'What is the highest selling record of all time?',
		answers: [
			{
				answerid: 'Q1A1',
				answerText: 'The Answer 1'	
			},
			{
				answerid: 'Q1A2',
				answerText: 'The Answer 2'	
			},
			{
				answerid: 'Q1A3',
				answerText: 'The Answer 3'	
			},
			{
				answerid: 'Q1A4',
				answerText: 'The Answer 4'	
			}
		]
	}
];

@Component({
  selector: 'mygame',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 	title = 'My Game Show';
 	questions = QUESTIONS;	
}




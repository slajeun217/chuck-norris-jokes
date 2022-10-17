import {  Joke, JokesService } from '../service/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-cards',
  templateUrl: './joke-cards.component.html',
  styleUrls: ['./joke-cards.component.css']
})
export class JokeCardsComponent implements OnInit {
  private _joke: Joke | undefined;
  save_confirmation : string = "";

  constructor(private jokesService: JokesService) {}

  getJoke() {
    return this._joke;
  }

  loadJoke() {
    this.jokesService.getJoke().subscribe(response => {
      if (!this.isCensored(response.value))
      {
        this._joke = response;
        this.save_confirmation = "";
        return;
      }
      
      this.loadJoke();
    });
 }

 isCensored(jokeValue: string) {
  if (this.jokesService.getCensoredWords().some(v => jokeValue.includes(v))) {
    return true;
  }

  return false;
 }

 saveJoke() {
  this.jokesService.saveJoke(this._joke || new Joke());

  this.save_confirmation = "Saved!";
 }

  ngOnInit(): void {
    this.loadJoke();
  }

}

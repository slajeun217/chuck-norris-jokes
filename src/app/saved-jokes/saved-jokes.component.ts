import { Component, OnInit } from '@angular/core';
import { JokesService } from '../service/jokes.service';

@Component({
  selector: 'app-saved-jokes',
  templateUrl: './saved-jokes.component.html',
  styleUrls: ['./saved-jokes.component.css']
})

export class SavedJokesComponent implements OnInit {
  displayedColumns: string[] = ['value', 'saved_date'];
  dataSource = this.jokesService.getSavedJokes();

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.dataSource = this.jokesService.getSavedJokes();
  }

}

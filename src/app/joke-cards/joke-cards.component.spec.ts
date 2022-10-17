import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeCardsComponent } from './joke-cards.component';

describe('JokeCardsComponent', () => {
  let component: JokeCardsComponent;
  let fixture: ComponentFixture<JokeCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.css'
})
export class MatchCardComponent implements OnInit{
  @Input()
  liveMatch:any

  ngOnInit(): void {
    
  }
}

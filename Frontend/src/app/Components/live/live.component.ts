import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../Services/apiservice.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  liveMatches: any
  constructor(private apiService: ApiserviceService){}

  ngOnInit(){
    this.getLiveMatches();
  }

  getLiveMatches(){
    this.apiService.getLiveMatches().subscribe({
      next:data=>{
        this.liveMatches = data
      },error:error=>{
        console.log(error)
      }
    })
  }
}

import { Component } from '@angular/core';
import { ApiserviceService } from '../../Services/apiservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  allMatch:any

  constructor(private apiService: ApiserviceService){}

  ngOnInit(){
    this.getAllMatches();
  }

  getAllMatches(){
    this.apiService.getAllMatches().subscribe({
      next:data=>{
        this.allMatch = data
      },error:error=>{
        console.log(error)
      }
    })
  }


}

import { Component } from '@angular/core';
import { ApiserviceService } from '../../Services/apiservice.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrl: './points-table.component.css'
})
export class PointsTableComponent {

  tableHeading: any
  pointsTable:any
  constructor(private apiService: ApiserviceService){}

  ngOnInit(){
    this.getPointsTable();
  }

  getPointsTable(){
    this.apiService.getPointsTable().subscribe({
      next:data=>{
        this.tableHeading = data[0]
        if(this.tableHeading.length > 0){
          this.tableHeading.splice(8,1)
        }
        
        this.pointsTable = data
        if(this.pointsTable.length > 0){
          this.pointsTable.splice(0, 1)
          this.pointsTable.forEach(element => {
            element.splice(8, 1)
          });
        }
        
      },error:error=>{
        console.log(error)
      }
    })
  }

}

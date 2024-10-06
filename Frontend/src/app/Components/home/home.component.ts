import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private id;
  constructor(private route: Router, private activatedRoute:ActivatedRoute){}

  // NavigateTOLive(){
  //   // this.route.navigate(['live'], {relativeTo:this.activatedRoute})
  //   // this.route.navigateByUrl('live')
  // }
  // ngOnInit(){
  //   this.id = this.activatedRoute.snapshot.paramMap.get('id')
  //   console.log(this.id)
  // }

  ngOnInit(){
    // this.activatedRoute.paramMap.subscribe((param) => {
    //   this.id = param.get("id")
    //   console.log(this.id)
    // })
    // console.log(this.id)
  }
}

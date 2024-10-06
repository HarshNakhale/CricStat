import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  getAllMatches(){
    return this.httpClient.get('http://localhost:8080/match')
  }

  getLiveMatches(){
    // return this.httpClient.get(`$(environment.apiUrl)/match/live`)
    return this.httpClient.get('http://localhost:8080/match/live')
  }

  getPointsTable(){
    return this.httpClient.get('http://localhost:8080/match/point-table')
  }
}

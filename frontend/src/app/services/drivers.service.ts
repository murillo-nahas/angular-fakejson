import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Drivers } from '../interfaces/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private http: HttpClient) { }

  protected UrlJson: string = "http://localhost:3000/";

  getDrivers() : Observable<Drivers[]> {
    return this.http.get<Drivers[]>(this.UrlJson + "drivers");
  } 
}

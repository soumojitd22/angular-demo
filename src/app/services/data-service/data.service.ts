import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../const';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API = Constant.API;
  private API_KEY = Constant.API_KEY;

  constructor(private http: HttpClient) { }

  save(student: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API, student, {
      headers:
        { ['x-api-key']: this.API_KEY }
    });
    return result;
  }
}

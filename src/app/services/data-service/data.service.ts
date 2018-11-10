import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../const';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API = Constant.API;

  constructor(private http: HttpClient) { }

  save(student: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API, student, {
      headers:
        { ['x-api-key']: 'mejhCjgsteYd8T0selCU5TcAIXax5Ir5ABiDtNP5' }
    });
    return result;
  }
}

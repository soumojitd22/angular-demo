import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API = 'https://j82iada1l1.execute-api.ap-south-1.amazonaws.com/demo/DemoAppLambdaFunction';

  constructor(private http: HttpClient) { }
  
  save(student: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API, student);
    return result;
  }
}

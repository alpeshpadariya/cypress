import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  generateShortUrlApi(url: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.get(`https://api.shrtco.de/v2/shorten?url=${url.urlName}`).pipe(
      map((response) => response),
      catchError(err => {
        return of([]);
      })
    );
  }


}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsService {
  constructor (
    private http: Http
  ) {}

  getNews() {
    return this.http.get(`https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=6293f8f9b8fe4a438682e63d7de8c9fc`)
      .map((res:Response) => res.json());
  }
}

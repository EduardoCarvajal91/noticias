import { Injectable } from '@angular/core';
import { News} from "../model/news";
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { of} from "rxjs/observable/of";

@Injectable()
export class FavoritesService {
  private favorites = []

  constructor (
  ) {}

  addFavorite(favorite){
   for (let article in this.favorites){
      if (article['publishedAt'] == favorite['publishedAt']){
        break;
      }
    }
    this.favorites.push(favorite);
  }


  getFavorites(): Observable<any[]>{
    return of(this.favorites);
  }
  removeFavorite(publishedAt){
    console.log(publishedAt)
    let articles = this.favorites
    for (let article = 0; article < articles.length; article ++){
      if (articles[article]['publishedAt'] == publishedAt){
        console.log(articles[article]['author'])
        this.favorites.splice(article, 1);
        break;
      }
    }
  }

}

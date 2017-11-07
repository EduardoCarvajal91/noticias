import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from "../../services/hacker-news.service";
import { FavoritesService} from "../../services/favorites.service";

import { News} from "../../model/news";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news = {};
  constructor(private HackerNewsService: HackerNewsService, private FavoritesService: FavoritesService) {
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
  }

  ngOnInit() {
  }

  addFavorite(publishedAt){
    let favorite = {};
    console.log(publishedAt)
    let articles = this.news['articles'];
    for(let article in articles){
      if (articles[article]['publishedAt'] == publishedAt){
        console.log(articles[article]['author']);
        favorite = new News(
          articles[article]['publishedAt'],
          articles[article]['title'],
          articles[article]['description'],
          articles[article]['author'],
          articles[article]['url'],
          articles[article]['urlToImage']
        );
        this.FavoritesService.addFavorite(favorite);
        break;
      }
    }

  }

}

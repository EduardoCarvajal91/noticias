import { Component, OnInit } from '@angular/core';

import { FavoritesService} from "../../services/favorites.service";

import { News} from "../../model/news";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites = {}
  constructor(private FavoritesService: FavoritesService) {
    this.FavoritesService.getFavorites().subscribe(
        favorites => this.favorites = favorites
    );
  }

  ngOnInit() {
  }

  removeFavorite(publishedAt){
    this.FavoritesService.removeFavorite(publishedAt);
  }

}

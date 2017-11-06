import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from "../../services/hacker-news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news = {};
  constructor(private HackerNewsService: HackerNewsService) {
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
  }

  ngOnInit() {
  }

}

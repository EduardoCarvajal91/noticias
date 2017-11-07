export class News {
  constructor(
    public publishedAt: string,
    public title: string,
    public description: string,
    public author: string,
    public url: string,
    public urlToImage
    ) { }
}

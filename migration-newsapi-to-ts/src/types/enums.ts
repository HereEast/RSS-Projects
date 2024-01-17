export const enum Selector {
  NewsTemplate = "#newsItemTemp",
  NewsContainer = ".news",
  NewsItem = ".news__item",
  Photo = ".news__meta-photo",
  Author = ".news__meta-author",
  Date = ".news__meta-date",
  Title = ".news__description-title",
  Source = ".news__description-source",
  Description = ".news__description-content",
  Link = ".news__read-more a",
  SourceTemplate = "#sourceItemTemp",
  SourcesContainer = ".sources",
  SourceItemName = ".source__item-name",
  SourceItem = ".source__item",
}

export enum HttpStatusCode {
  Unauthorized = 401,
  NotFound = 404,
}

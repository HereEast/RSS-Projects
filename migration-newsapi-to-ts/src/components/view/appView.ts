import News from "./news/news";
import Sources from "./sources/sources";
import { NewsData, SourcesData } from "../../types/types";
import { IViewer } from "../../types/interfaces";

// Class
export class AppView implements IViewer {
  readonly news: News;
  readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: NewsData): void {
    const values: NewsData["articles"] = data?.articles ? data.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: SourcesData): void {
    const values: SourcesData["sources"] = data?.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;

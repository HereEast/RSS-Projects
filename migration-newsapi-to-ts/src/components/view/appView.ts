import News from "./news";
import Sources from "./sources";
import { NewsArray, SourcesArray, Data } from "../../types/types";

export class AppView {
  readonly news: News;
  readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public renderNews(data: Data): void {
    if ("articles" in data) {
      const articles: NewsArray | [] = data?.articles ?? [];
      this.news.render(articles);
    }
  }

  public renderSources(data: Data): void {
    if ("sources" in data) {
      const sources: SourcesArray | [] = data?.sources ?? [];
      this.sources.render(sources);
    }
  }
}

export default AppView;

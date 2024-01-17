// NEWS
export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export type NewsData = Pick<NewsResponse, "articles">;
export type NewsArray = NewsData["articles"];

//
// SOURCES
export interface Source {
  category: string;
  country: string;
  description: string;
  id: string;
  name: string;
  url: string;
}

export interface SourcesResponse {
  status: string;
  sources: Source[];
}

export type SourcesData = Pick<SourcesResponse, "sources">;
export type SourcesArray = SourcesData["sources"];

export type Data = NewsData | SourcesData;

// HTTP
export type Options = Record<string, string>;

export interface RespObject {
  endpoint: string;
  options?: Options;
}

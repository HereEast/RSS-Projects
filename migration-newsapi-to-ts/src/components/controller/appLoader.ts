import Loader from "./loader";

class AppLoader extends Loader {
  constructor() {
    super("https://rss-news-api.onrender.com/", {
      apiKey: `${process.env.API_KEY}`,
    });
  }
}

export default AppLoader;

import AppLoader from "./appLoader";
import { Data } from "../../types/types";

class AppController extends AppLoader {
  getSources(callback: (data: Data) => void): void {
    super.getResp({ endpoint: "sources" }, callback);
  }

  getNews(e: Event, callback: (data: Data) => void): void {
    let target = e.target;
    const newsContainer = e.currentTarget;

    if (!target) throw Error("Can't find e.target element.");
    if (!newsContainer) throw Error("Can't find e.currentTarget element.");

    while (target !== newsContainer) {
      if (target instanceof HTMLElement && target.classList.contains("source__item")) {
        const sourceId = target.getAttribute("data-source-id") || "";

        if (newsContainer instanceof HTMLElement && newsContainer.getAttribute("data-source") !== sourceId) {
          newsContainer.setAttribute("data-source", sourceId);
          super.getResp(
            {
              endpoint: "everything",
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }

      if (target instanceof HTMLElement && target !== null) {
        target = target.parentNode;
      }
    }
  }
}

export default AppController;

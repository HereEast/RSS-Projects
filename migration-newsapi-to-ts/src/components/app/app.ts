import AppController from "../controller/controller";
import { Selector } from "../../types/enums";
import { AppView } from "../view/appView";
import { Data } from "../../types/types";

class App {
  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    const sources = document.querySelector(Selector.SourcesContainer);
    if (!sources) throw Error(`Can't find DOM element ${Selector.SourcesContainer}`);

    const sourcesTabs = sources.children;
    if (!sourcesTabs) throw Error(`Can't find children of ${Selector.SourcesContainer}`);

    sources.addEventListener("click", (e: Event) => {
      const target = e.target;

      if (!target) throw Error("Can't find e.target element.");
      if (!(target instanceof HTMLElement)) return;

      const targetContainer = target.closest(Selector.SourceItem);

      if (!targetContainer) throw Error(`Can't find DOM element ${Selector.SourceItem}.`);

      [...sourcesTabs].forEach((tab) => tab.classList.remove("active"));
      targetContainer.classList.add("active");

      this.controller.getNews(e, (data: Data) => this.view.renderNews(data));
    });

    this.controller.getSources((data: Data) => this.view.renderSources(data));
  }
}

export default App;

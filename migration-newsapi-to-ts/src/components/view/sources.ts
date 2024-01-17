import { SourcesArray } from "../../types/types";
import { Selector } from "../../types/enums";

class Sources {
  render(data: SourcesArray | []): void {
    const sources = [...data];

    const fragment = document.createDocumentFragment();

    const sourceItemTemp = document.querySelector(Selector.SourceTemplate);
    const sourcesContainer = document.querySelector(Selector.SourcesContainer);

    if (!sourceItemTemp || !(sourceItemTemp instanceof HTMLTemplateElement)) {
      throw Error(`Can't find DOM element ${Selector.SourceTemplate}`);
    }
    if (!sourcesContainer) throw Error(`Can't find DOM element ${Selector.SourcesContainer}`);

    sources.forEach((source) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true);

      if (!sourceClone || !(sourceClone instanceof DocumentFragment)) {
        throw Error(`Failed to clone ${sourceItemTemp}`);
      }

      const sourceItem = sourceClone.querySelector(Selector.SourceItem);
      const itemName = sourceClone.querySelector(Selector.SourceItemName);

      if (!itemName) throw Error(`Can't find DOM element ${Selector.SourceItemName}`);
      if (!sourceItem) throw Error(`Can't find DOM element ${Selector.SourceItem}`);

      itemName.textContent = source.name;
      sourceItem.setAttribute("data-source-id", source.id);

      fragment.append(sourceClone);
    });

    sourcesContainer.append(fragment);
  }
}

export default Sources;

import { SVGElement, Selector, Button, ClassNames } from "../../types/types";

export function createElement(tag: string, classNames?: ClassNames, text?: string): HTMLElement {
  const element = document.createElement(tag);

  if (!(element instanceof HTMLElement)) {
    throw Error(`Couldn't create HTML element ${tag}`);
  }

  if (classNames?.length) {
    const classList = classNames.map((el) => el.slice(1));
    element.classList.add(...classList);
  }

  if (text) element.textContent = text;

  return element;
}

export function createButton(name: Button | string, classNames?: ClassNames): HTMLButtonElement {
  const button = createElement("button", classNames, name);

  if (!(button instanceof HTMLButtonElement)) {
    throw Error(`Couldn't create button ${name}`);
  }

  if (classNames && !classNames.includes(Selector.ButtonTrack)) {
    const buttonID = `button__${name.toLowerCase()}`;
    button.id = buttonID;
  }

  return button;
}

export function createInput(type: string, action: Button): HTMLInputElement {
  const input = createElement("input", [`.input-${type}`]);

  if (!(input instanceof HTMLInputElement)) {
    throw Error("Failed to create HTMLInput Element...");
  }

  input.id = `input-${type}__${action}`;
  input.type = type;
  input.autocomplete = "off";

  return input;
}

export function createLink(text: string, url: string, classNames?: ClassNames): HTMLAnchorElement {
  const link = createElement("a", classNames, text);

  if (!(link instanceof HTMLAnchorElement)) {
    throw Error("Failed to create a <a> element...");
  }

  link.href = url;

  return link;
}

export function createSVG(params: SVGElement): HTMLElement {
  const div = createElement("div", [params.divClass]);

  const svg = document.createElementNS(params.ns, "svg");

  svg.setAttribute("width", params.width);
  svg.setAttribute("height", params.height);

  if (params.color && svg instanceof SVGElement) {
    svg.style.backgroundColor = params.color;
  }

  div.append(svg);

  return div;
}

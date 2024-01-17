export function createElement(tag: string, classNames: string[], text?: string): HTMLElement {
  const element = document.createElement(tag);
  element.classList.add(...classNames);

  if (text) element.textContent = text;

  return element;
}

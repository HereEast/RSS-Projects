// From start
export function highlightFromStart(target: HTMLElement, lines: HTMLElement[]): void {
  const tagName = target.innerText.slice(1, -1).split(" ")[0];

  const startIdx = lines.indexOf(target);
  const endIdx = lines.findIndex((line, i) => {
    return i > startIdx && line.innerText === `</${tagName}>`;
  });

  const linesBlock = lines.slice(startIdx, endIdx + 1);

  linesBlock.forEach((line) => {
    line.classList.add("highlight");
  });
}

// From end
export function highlightFromEnd(target: HTMLElement, lines: HTMLElement[]): void {
  const tagName = target.innerText.slice(2, -1);

  const endIdx = lines.indexOf(target);
  const idxArray: number[] = [];

  lines.forEach((line, i) => {
    if (i < endIdx && line.innerText.startsWith(`<${tagName}`)) {
      idxArray.push(i);
    }
  });

  const startIdx = idxArray.pop();
  const linesBlock = lines.slice(startIdx, endIdx + 1);

  linesBlock.forEach((line) => {
    line.classList.add("highlight");
  });
}

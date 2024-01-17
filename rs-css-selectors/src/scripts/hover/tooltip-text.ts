export function createTooltipText(target: HTMLElement): string {
  const outerTag = target.outerHTML;

  const idx1 = outerTag.indexOf(">") + 1;
  const idx2 = outerTag.lastIndexOf("<");

  const tagString = outerTag.slice(0, idx1) + outerTag.slice(idx2);
  const tooltipText = tagString
    .replace(/ dance/, "")
    .replace(/ class="dance"/, "")
    .replace(/ el="\d"/, "");

  return tooltipText;
}

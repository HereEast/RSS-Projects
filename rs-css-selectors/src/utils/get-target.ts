// Get target
export function getTarget(e: Event): HTMLElement {
  const target = e.target;

  if (!target) throw Error("Target element is not found...");
  if (!(target instanceof HTMLElement)) throw Error("Target is not an HTMLElement...");

  return target;
}

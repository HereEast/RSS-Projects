export function getSavedStatus(id: string): string {
  const savedResults = window.localStorage.getItem("results");
  const results = savedResults ? JSON.parse(savedResults) : {};

  return results[id] ? results[id] : "unfinished";
}

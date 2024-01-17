export function getCurrentLevelID(): string {
  return window.localStorage.getItem("level") || "1";
}

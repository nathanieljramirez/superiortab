import engines from "./engines.json";

export function search(query) {
  window.location.href = `${engines[0].prefix}${query}`;
}

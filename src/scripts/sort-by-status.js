export default function sortByStatus(filteredItems) {
  return filteredItems.sort((a, b) => {
    if (a.status > b.status) return -1;
    if (a.status < b.status) return 1;
    return 0;
  });
}

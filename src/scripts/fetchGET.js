export default async function fetchGET(url) {
  const response = await fetch(url);
  const trackingData = await response.json();
  return trackingData;
}

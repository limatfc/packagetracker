import { useState, useEffect } from "react";
import fetchGET from "../scripts/fetchGET";
import backupData from "../data/backup.json";

// This is a React component (JSX) not a .JS
export default function useFetchedDataHandler() {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchStatus, setFetchStatus] = useState(0);

  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  useEffect(() => getFetchedData(url), [url]);

  async function getFetchedData(url) {
    try {
      const fetchGetData = await fetchGET(url);
      setFetchedData(fetchGetData);
      setFetchStatus(1);
    } catch (error) {
      setFetchedData(backupData);
    }
  }

  return { fetchedData, fetchStatus };
}

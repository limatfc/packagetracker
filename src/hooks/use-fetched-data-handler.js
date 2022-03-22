import { useState, useEffect } from "react";
import fetchGET from "../scripts/fetchGET";

export default function useFetchedDataHandler(url) {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => getFetchedData(url), [url]);

  async function getFetchedData(url) {
    try {
      setIsLoading(true);
      const fetchGetData = await fetchGET(url);
      setFetchedData(fetchGetData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setFetchError(true);
      console.error(
        `It seems like the problem -${error.message}- was thrown when trying to fetch the ${url} URL.`
      );
    }
  }

  return { fetchedData, isLoading, fetchError };
}

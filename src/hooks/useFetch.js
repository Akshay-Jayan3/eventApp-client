import { useState, useEffect, useCallback } from "react";
import { client } from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      if (url) {
        const response = await client.get(url);
        if (response.data) {
          setData(response.data);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;

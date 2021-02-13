import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtrl = new AbortController();
    fetch(url, { signal: abortCtrl.signal })
      .then((response) => {
        console.log(response);
        if (!response.ok) throw Error("Couldn't Fetch data from this url");
        return response.json();
      })
      .then((response) => {
        setData(response);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCtrl.abort();
  }, [url]);

  return { data, isPending, error };
};

export default UseFetch;

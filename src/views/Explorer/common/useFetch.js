import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  console.log(url);

  /* let req = new Request(
    "https://api.github.com/repos/minhazmiraz/react-blog/git/trees/70c2e39283810f81ef470d13751171b8393c7f0a?recursive=true",
    { headers: new Headers({ Accept: "application/vnd.github.raw+json" }) }
  ); */

  useEffect(() => {
    const abortCtrl = new AbortController();
    fetch(url, { signal: abortCtrl.signal })
      .then((response) => {
        if (!response.ok) throw Error("Couldn't Fetch data from this url");
        return response.json();
      })
      .then((response) => {
        console.log(response);
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

  console.log("useFetch:", { data, isPending, error });

  return { data, isPending, error };
};

export default UseFetch;

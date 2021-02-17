export const useFetch = (url, abortCtrl) => {
  console.log(url);

  return new Promise((resolve, reject) => {
    fetch(url, { signal: abortCtrl.signal })
      .then((response) => {
        if (!response.ok) throw Error("Couldn't Fetch data from this url");
        return response.json();
      })
      .then((response) => {
        console.log(response);
        resolve({ data: response, isPending: false, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          resolve({ data: null, isPending: false, error: err.message });
        }
      });
  });
};

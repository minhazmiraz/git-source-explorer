let key = "git-source-explorer";
export const getDataFromStorage = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], (res) => {
      if (!res[key]) resolve(null);
      else {
        resolve(res[key]);
      }
    });
  });
};

export const setDataInStorage = (value) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [key]: value }, (res) => {
      console.log("Value set ", value);
    });
  });
};

export const getDataFromStorage = (storageKey) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([storageKey], (res) => {
      if (!res[storageKey]) resolve(null);
      else {
        resolve(res[storageKey]);
        console.log("Data found in storage");
      }
    });
  });
};

export const setDataInStorage = (storageKey, value) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({ [storageKey]: value }, (res) => {
      console.log("Value set ", value);
    });
  });
};

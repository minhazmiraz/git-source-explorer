let tempExplorerData = null;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "OPEN_EXPLORER") {
    tempExplorerData = request.data;
    chrome.tabs.create({
      url: chrome.extension.getURL("explorer.html?repo=" + sender.tab.url),
    });
    sendResponse({ message: "explorer opened" });
  } else if (request.action == "GET_EXPLORER_DATA") {
    sendResponse({ message: "data sent", data: tempExplorerData });
  }
});

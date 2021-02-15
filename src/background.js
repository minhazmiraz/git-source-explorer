let tempExplorerData = null;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "OPEN_EXPLORER") {
    tempExplorerData = request.data;
    chrome.tabs.create({
      url: chrome.extension.getURL(
        "explorer.html?name=" +
          request.data.name +
          "&author=" +
          request.data.author +
          "&branch=" +
          request.data.branch +
          "&sha=" +
          request.data.sha
      ),
    });
    sendResponse({ message: "explorer opened" });
  }
});

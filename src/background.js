chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "OPEN_EXPLORER") {
    chrome.tabs.create({
      url: chrome.extension.getURL("explorer.html?repo=" + sender.tab.url),
    });
    sendResponse({ message: "explorer opened" });
  }
});

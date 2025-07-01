chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed and background script is active.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url && tab.url.includes("youtube.com/shorts/")) {
    const videoId = tab.url.split("/shorts/")[1].split(/[?#]/)[0];
    const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
    chrome.tabs.update(tabId, { url: newUrl });
  }
});

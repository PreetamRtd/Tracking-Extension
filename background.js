// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && tab.url) {
//     const redirectUrls = ["https://www.youtube.com", "https://music.youtube.com"];
//     const targetUrl = "https://www.google.com";

//     redirectUrls.forEach(url => {
//       if (tab.url.includes(url)) {
//         chrome.tabs.update(tabId, { url: targetUrl });
//       }
//     });
//   }
// });
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const redirectUrls = ["https://www.youtube.com", "https://music.youtube.com"];
    const targetUrl = "https://studio.youtube.com";

    redirectUrls.forEach(url => {
      if (changeInfo.url.includes(url)) {
        chrome.tabs.update(tabId, { url: targetUrl });
      }
    });
  }
});



let myNumber = 42;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "watch_time") {
      
      // console.log("Received greeting from content scripts:", message.text);
      sendResponse({ number: message.h1num1 });
    }
  });
  


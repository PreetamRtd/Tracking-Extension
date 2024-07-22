let myNumber = 42;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "greeting") {
      
      // console.log("Received greeting from content scripts:", message.text);
      sendResponse({ number: myNumber });
    }
  });
  

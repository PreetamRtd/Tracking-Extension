console.log('This is a popup!');
a = -1;
b = -1;
const h1tag = document.getElementById("id1");
const h2tag = document.getElementById("id2");
h1tag.innerHTML = `${a}`;


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  

    if (request.action === "tag1") {
      const data = request.data;
    a = data;        
    h1tag.innerHTML = `${a}`;
      
    }
    if (request.action === "tag2") {
      const data = request.data;
    b = data
     
    h2tag.innerHTML = `${b}`;
    }
  });

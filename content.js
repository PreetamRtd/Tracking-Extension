// Send a message to the background script
// window.addEventListener('beforeunload', function() {
//   if (window.location.hostname.includes("www.youtube.com") || window.location.hostname.includes("music.youtube.com")) {
//     window.location.replace("https://studio.youtube.com/");
//   }
// });

// Create a new button element
const button = document.createElement('button');
button.textContent = 'Click Me';

// Style the button (optional)
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = 1000;

let num = 2;
// Add an event listener to the button (optional)
button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: "greeting", number: num }, (response) => {
    console.log("Received response from background script:", response.number);
  });
});

// Append the button to the body of the web page
document.body.appendChild(button);

  
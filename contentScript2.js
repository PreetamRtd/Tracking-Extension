// Function to click the button with specific ID first
function clickButton() {
    // Select the button with the specific ID
    var button = document.getElementById("uid-single-select-opener-1-wb-id");

    if (button) {
        button.click();
        // Log the texts to the console
        firstObserver.disconnect(); // Stop observing once the button is clicked
        // After clicking the first button, start observing for the second button
        startSecondObserver();
    }
}

// MutationObserver to wait for the button to be added to the DOM
const firstObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'subtree') {
            clickButton();
        }
    });
});

// Start observing the entire document for changes for the first button
firstObserver.observe(document, { childList: true, subtree: true });

// Also try to click the first button when the page is fully loaded
window.addEventListener('load', clickButton);

let worknotdone = true;
// Function to click the first button inside the specific div
function clickFirstButtonInDiv() {
    // Select the div with the specific ID
    var div = document.getElementById("uid-single-select-dropdown-0-wb-id");
    if (div) {
        // Select the first button inside the div
        var button = div.querySelector("button");
        if (button) {
            button.click();
            // Stop observing once the button is clicked
            secondObserver.disconnect();
        } else {
            console.log("Button not found inside the div!");
        }
    } else {
        if (worknotdone) {
            var containerDiv = document.getElementById('app-shell-root');
            var h1tag1 = containerDiv.getElementsByTagName('h1')[2];
            var h1tag2 = containerDiv.getElementsByTagName('h1')[3];
            if (h1tag1 && h1tag2) {
                let h1num1 = parseInt(h1tag1.innerText, 10);
                let h1num2 = parseInt(h1tag2.innerText, 10);
                const currentDate = new Date();
                const watch_time = { h1num1: h1num1, h1num2: h1num2 , currentDate: currentDate};
                chrome.storage.local.set({ watch_time: watch_time }, function () {
                    console.log('Watch-Time is set to ', watch_time);
                });

                chrome.runtime.sendMessage({ type: "watch_time", h1num1: h1num1, h1num2: h1num2 }, (response) => {
                    console.log("Received response from background script:", response.number);
                });
                console.log(h1tag1.innerText, " ", h1tag2.innerText)
                worknotdone = false;
            }
        }
    }
}

// Define the second observer
let secondObserver;

// Function to start observing for the second button
function startSecondObserver() {
    secondObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'subtree') {
                clickFirstButtonInDiv();
            }
        });
    });

    // Start observing the entire document for changes for the second button
    secondObserver.observe(document, { childList: true, subtree: true });

    // Also try to click the second button when the page is fully loaded
    window.addEventListener('load', clickFirstButtonInDiv);
}


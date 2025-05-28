chrome.commands.onCommand.addListener((command) => {
  if (command === "new-tab-right") {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.create({index: tabs[0].index + 1});
    });
  }
});
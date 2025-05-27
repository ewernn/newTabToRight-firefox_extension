browser.commands.onCommand.addListener((command) => {
  if (command === "new-tab-right") {
    browser.tabs.query({active: true, currentWindow: true}, (tabs) => {
      browser.tabs.create({index: tabs[0].index + 1});
    });
  }
});
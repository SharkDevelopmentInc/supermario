chrome.runtime.onInstalled.addListener(function(details) {
    chrome.tabs.create({
        url: 'https://supermariobrosgame.site/'
    });
});
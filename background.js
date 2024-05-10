chrome.runtime.onInstalled.addListener(function() {
    // Initialize storage if not already initialized
    chrome.storage.local.get(['credentials'], function(result) {
      if (!result.credentials) {
        chrome.storage.local.set({ credentials: [] });
      }
    });
  });
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'recordCredentials') {
      chrome.storage.local.get(['credentials'], function(result) {
        let credentials = result.credentials || [];
        credentials.push(message.credentials);
        chrome.storage.local.set({ credentials: credentials });
      });
    }
  });
  
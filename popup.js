document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get(['credentials'], function(result) {
      const credentials = result.credentials || [];
      const credentialsList = document.getElementById('credentialsList');
  
      credentials.forEach(function(credential) {
        const li = document.createElement('li');
        li.textContent = `URL: ${credential.url}, Username: ${credential.username}, Email: ${credential.email}, Password: ${credential.password}`;
        credentialsList.appendChild(li);
      });
    });
  });
  

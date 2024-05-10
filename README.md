This extension will listen for form submissions on web pages and record the username, email (if available), password, and URL. You can then view the recorded credentials by clicking on the extension icon and selecting "Recorded Credentials".

Remember, this is a basic example and may need adjustments for security and usability. Be sure to handle sensitive data securely, as storing passwords in plaintext locally can pose security risks. Also, keep in mind that using such an extension might violate terms of service of certain websites, particularly if they prohibit the storage or sharing of login credentials.

To distribute your extension, you don't necessarily "host" it in the same way you would a website. Instead, you package it and distribute it through the appropriate channels depending on the browser you're targeting.

Here's how you can distribute your extension for different browsers:

### Google Chrome:

1. **Packaging the Extension**:
   - Go to `chrome://extensions/`.
   - Enable Developer mode (toggle switch at the top-right).
   - Click on "Load unpacked" and select the folder containing your extension files.

2. **Packaging for Distribution**:
   - Once you've tested your extension and are ready to distribute it, you need to package it.
   - Go back to `chrome://extensions/`.
   - Click the "Pack extension" button.
   - Select your extension folder, and Chrome will create a .crx file (Chrome Extension file) for you.

3. **Distributing**:
   - You can distribute your extension by uploading the .crx file to the Chrome Web Store.
   - You need to create a developer account on the Chrome Web Store and pay a one-time registration fee.
   - After uploading your extension, it will undergo a review process before being published.

### Firefox:

1. **Packaging the Extension**:
   - Go to `about:debugging#/runtime/this-firefox` in Firefox.
   - Click on "Load Temporary Add-on".
   - Select any file in your extension folder (e.g., manifest.json) to load your extension temporarily.

2. **Packaging for Distribution**:
   - You'll need to create a zip file of your extension.
   - This zip file should contain all the necessary files, including `manifest.json`, JavaScript files, icons, etc.

3. **Distributing**:
   - You can distribute your extension by submitting it to the Mozilla Add-ons website.
   - You'll need to create an account and submit your extension for review.
   - Once approved, your extension will be available for download through the Mozilla Add-ons website.

### Microsoft Edge:

1. **Packaging the Extension**:
   - Edge extensions are compatible with Chrome extensions, so you can use the same steps as for Chrome to load your extension temporarily during development.

2. **Packaging for Distribution**:
   - You package your extension the same way as for Chrome.

3. **Distributing**:
   - You can distribute your extension through the Microsoft Edge Add-ons website.
   - Like with Chrome and Firefox, you'll need to create an account and submit your extension for review.
   - Once approved, it will be available for download through the Edge Add-ons website.

### Other Browsers:

- For other browsers, the process might vary. Safari, for example, requires you to join the Apple Developer Program and distribute extensions through the App Store.
- For smaller or less popular browsers, you may need to research their specific extension distribution guidelines.

Remember, before distributing your extension, ensure that it complies with the respective browser's extension policies and guidelines.

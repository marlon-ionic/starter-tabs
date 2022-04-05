# Ionic Started Tabs Example Project

## Handling tel: and mailto: links from an InAppBrowser

If you're showing content from an external webpage via the cordova-plugin-inappbrowser, you may encounter a problem where links that use the scheme `tel:` or `mailto:` appear to be broken. A workaround was posted to [github](https://github.com/apache/cordova-plugin-inappbrowser/issues/830#issuecomment-951076119) and this is simply an example of what it would look like in an app. In Tab1, you'll notice two buttons. One launches the default behavior, and the order implements the workaround described.

```typescript
 const browser = this.iab.create(url, '_blank', this.options);

    browser.on('beforeload').subscribe((event) => {

      // Check if event url is an action link
      if (event.url.startsWith('tel:') || event.url.startsWith('mailto:')) {
        console.log('Found an action link! ' + event.url);
        window.open(event.url, '_system');
        return;
      }
      // any other workarounds can go here
      // ...
      
      // Nothing from above applies. Continue loading
      console.log('Beforeload released. Continue loading ' + event.url);
      browser._loadAfterBeforeload(event.url);
    });
```

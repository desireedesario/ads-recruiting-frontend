// // An example configuration file.
// exports.config = {
//   directConnect: true,
//
//   // Capabilities to be passed to the webdriver instance.
//   capabilities: {
//     'browserName': 'chrome'
//   },
//
//   // Framework to use. Jasmine is recommended.
//   framework: 'jasmine',
//
//   // Spec patterns are relative to the current working directory when
//   // protractor is called.
//   specs: ['chat.spec.js'],
//
//   // Options to be passed to Jasmine.
//   jasmineNodeOpts: {
//     defaultTimeoutInterval: 30000
//   }
// };

'use strict';

exports.config = {
    chromeDriver: './support/chromedriver', // relative path to node-webkit's chromedriver
    chromeOnly: true, // starting Selenium server isn't required in our case
    specs: ['chat.spec.js'],
    baseUrl: 'file:///Users/pikachu/Dropbox/ads-recruiting-frontend/index.html#/',
    rootElement: 'html', // specify a correct element where you bootstrap your AngularJS app, 'body' by default

    onPrepare: function() {

        // By default, Protractor use data:text/html,<html></html> as resetUrl, but
        // location.replace (see http://git.io/tvdSIQ) from the data: to the file: protocol is not allowed
        // (we'll get ‘not allowed local resource’ error), so we replace resetUrl with one
        // with the file: protocol (this particular one will open system's root folder)
        browser.resetUrl = 'file:///Users/pikachu/Dropbox/ads-recruiting-frontend/index.html#/';

        // This isn't required and used to avoid ‘Cannot extract package’ error showed
        // before Protractor have redirected node-webkit to resetUrl.
        browser.driver.get('file:///Users/pikachu/Dropbox/ads-recruiting-frontend/index.html#/');
    }
};

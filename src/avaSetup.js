var jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { document } = new JSDOM("<body></body>").window;
global.document = document;

global.window = document.defaultView;
global.navigator = window.navigator;

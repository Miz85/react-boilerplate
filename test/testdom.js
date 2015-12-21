const jsdom = require('jsdom').jsdom;

module.exports = function(markup) {
  // If document is already defined on the global namespace return because we don't want to create more than one DOM
  if (typeof global.document !== 'undefined') return;
  // pass markup to js-dom to create the fake DOM and bind it to the global document
  global.document = jsdom(markup || '');
  // bind the fake window object to the global namespace
  global.window = global.document.defaultView;
  // set a navigator so libraries like jQuery don't get confused and think they are using a chrome DOM
  global.navigator = {
    userAgent: 'node.js'
  };
};

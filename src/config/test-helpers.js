import { jsdom } from 'jsdom';

function noop() {
  return null;
}

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

require.extensions['.scss'] = noop;

global.navigator = {
  userAgent: 'node.js',
};

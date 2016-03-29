mocha.setup('bdd');
mocha.slow('300ms');
mocha.timeout('5s');
mocha.checkLeaks();
mocha.globals(['jQuery*', 'HTMLCS*', 'elements', 'found', 'LiveReload']);

import jQuery from 'jquery';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiAccessible from 'chai-accessible';
import chaiJquery from 'chai-jquery';
import chaiSpies from 'chai-spies';
import _ from 'underscore';
import _string from 'underscore.string';

_.mixin(_string.exports());
chai.use(chaiAsPromised);
chai.use(chaiSpies);
chai.config.truncateThreshold = 0;
chai.use(chaiAccessible({
  standard: 'WCAG2AAA'
}));

window.$ = jQuery;
chai.use((chai, utils) => {
  return chaiJquery(chai, utils, $);
});

window.expect = chai.expect;
window.assert = chai.assert;
window.currentURL = () => {
  return window.location.hash.replace('#', '');
};

const testsContext = require.context('../', true, /_spec$/);
testsContext.keys().forEach(testsContext);

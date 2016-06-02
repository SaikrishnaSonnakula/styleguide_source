import accordion from 'lib/modern/scripts/accordion';
import Harness from './support/harness';
import _ from 'underscore';
import $ from 'jquery';

describe('accordion component', function() {

  describe('closed', function() {

    beforeEach(function() {
      this.harness = createTestHarnessWith('<div id="closed-accordion" class="accordion">' +
        '<div class="-group">' +
        '<button class="-heading" role="link" aria-selected="false">Default Accordion Heading</button>' +
        '<div class="-content" aria-hidden="true" data-content="true">' +
        '<p>Hidden Accordion Content</p>' + '</div>', ['closed-accordion']);
    });

    afterEach(function() {
      this.harness.stop();
    });

    it('content should be hidden', function() {
      return this.harness.run(function() {
        this.verify(function(root) {
          expect($('.accordion .-group.-open', root)).to.not.exist;
          expect($('.accordion .-content', root).attr('aria-hidden')).to.exist;
          expect($('.accordion .-content', root).attr('aria-hidden')).to.equal('true');
          expect($('.accordion .-heading', root).attr('aria-selected')).to.equal('false');
        });
      });
    });

    it('reveals content when heading is clicked', function() {
      return this.harness.run(function() {
        this.click('#closed-accordion .-heading');
        this.verify(function(root) {
          expect($('.accordion .-group.-open', root)).to.exist;
          expect($('.accordion .-content', root).attr('aria-hidden')).to.not.exist;
          expect($('.accordion .-heading', root).attr('aria-selected')).to.equal('true');
          expect($('.accordion .-heading', root).attr('aria-expanded')).to.equal('true');
        });
      });
    });

  });

  describe('opened', function() {

    beforeEach(function() {
      this.harness = createTestHarnessWith('<div id="open-accordion" class="accordion"><div class="-group -open">' +
        '<button class="-heading" role="link" aria-selected="true" aria-expanded="true">Open Accordion Heading</button>' +
        '<div class="-content" data-content="true"><p>Accordion Content</p></div></div>', ['open-accordion']);
    });

    afterEach(function() {
      this.harness.stop();
    });

    it('conceals content when heading is clicked', function() {
      return this.harness.run(function() {
        this.click('#open-accordion .-heading');
        this.verify(function(root) {
          expect($('.accordion .-group.-open', root)).to.not.exist;
          expect($('.accordion .-content', root).attr('aria-hidden')).to.equal('true');
          expect($('.accordion .-heading', root).attr('aria-selected')).to.equal('false');
          expect($('.accordion .-heading', root).attr('aria-expanded')).to.equal('false');
        });
      });
    });

  });

  describe('with multiple headings', function() {

    afterEach(function() {
      this.harness.stop();
    });

    it('reveals content for direct adjacent sibling when heading is clicked', function() {
      this.harness = createTestHarnessWith('<div id="multiple-headings" class="accordion">' +
        '<div class="-group">' +
        '<button class="-heading" aria-selected="false" role="link">' + 'First Accordion Heading' + '</button>' +
        '<div class="-content" aria-hidden="true" role="tabpanel"><p>First Accordion Content</p></div>' +
        '</div>' +
        '<div class="-group">' +
        '<button class="-heading" aria-selected="false" role="link">Second Accordion Heading</button>' +
        '<div class="-content" aria-hidden="true" role="tabpanel"><p>Second Hidden Accordion Content</p></div>' +
        '</div></div>', ['multiple-headings']);

      return this.harness.run(function() {
        this.click('#multiple-headings .-heading');
        this.verify(function(root) {
          expect($('.accordion .-group.-open', root).length).to.equal(1);
          expect($('.accordion .-open .-heading', root).text()).to.equal('First Accordion Heading');
          expect($('.accordion .-open .-content', root).text()).to.equal('First Accordion Content');
        });
      });
    });


    it('conceals content for direct adjacent sibling when heading is clicked', function() {
      this.harness = createTestHarnessWith('<div id="multiple-open-headings" class="accordion">' +
        '<div class="-group -open">' +
        '<button class="-heading" role="link">' + 'First Open Heading' + '</button>' +
        '<div class="-content" role="tabpanel"><p>First Accordion Content</p></div>' +
        '</div>' +
        '<div class="-group -open">' +
        '<button class="-heading" role="link">Second Open Heading</button>' +
        '<div class="-content" role="tabpanel"><p>Second Open Accordion Content</p></div>' +
        '</div></div>', ['multiple-open-headings']);

      return this.harness.run(function() {
        this.click('#multiple-open-headings .-heading');
        this.verify(function(root) {
          expect($('.accordion .-group.-open', root).length).to.equal(1);
          expect($('.accordion .-open .-content', root).length).to.equal(1);
          expect($('.accordion .-open .-heading', root).text()).to.equal('Second Open Heading');
          expect($('.accordion .-open .-content', root).text()).to.equal('Second Open Accordion Content');
        });
      });
    });

  });

  function createTestHarnessWith(markup, ids) {
    var selectors = ids || ['my-accordion'];
    return new Harness(function(root) {
      return {
        start: function() {
          root.append(markup);
          _.each(selectors, function(selector) {
            accordion($('#' + selector, root));
          });
        },
        stop: function() {}
      };
    }, {
      noRoutes: true
    });
  }
});

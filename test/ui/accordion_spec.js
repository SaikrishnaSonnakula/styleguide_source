import accordion from 'lib/modern/scripts/accordion';
import Harness from './support/harness';
import _ from 'underscore';
import $ from 'jquery';

describe('accordion component', function() {

	describe('closed', function(){

	beforeEach(function() {
		this.harness = createTestHarnessWith('<div id="closed-accordion" class="accordion">' +
		 '<div class="-heading">' + 'Default Accordion Heading' + '</div>' + '<div class="-content" aria-hidden="true">' + '<p>Hidden Accordion Content</p>' + '</div>', ['closed-accordion']);
	});

	afterEach(function() {
		this.harness.stop();
	});

	it('content should be hidden', function() {
		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root)).to.not.exist;
				expect($(".accordion .-content.-open", root)).to.not.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.equal('true');
			});
		});
	});

	it('reveals content when heading is clicked', function() {
		return this.harness.run(function() {
			this.click("#closed-accordion .-heading");
			this.verify(function(root) {
				expect($(".accordion .-content.-open", root)).to.exist;
				expect($(".accordion .-heading.-open", root)).to.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.not.exist;
			});
		});
	});

});

describe('opened', function(){

	beforeEach(function() {
	this.harness = createTestHarnessWith('<div id="open-accordion" class="accordion">' +
		'<div class="-heading -open">' +
		'Open Accordion Heading' + '</div>' +
		'<div class="-content -open">' +
		'<p>Accordion Content</p>' + '</div>', ['open-accordion']);
	});

	afterEach(function() {
		this.harness.stop();
	});

	it('conceals content when heading is clicked', function() {
		return this.harness.run(function() {
			this.click("#open-accordion .-heading");
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root)).to.not.exist;
				expect($(".accordion .-content.-open", root)).to.not.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.equal('true');
			});
		});
	});

});

describe('with multiple headings', function(){

	afterEach(function() {
		this.harness.stop();
	});

	it('reveals content for direct adjacent sibling when heading is clicked', function() {
	this.harness = createTestHarnessWith('<div id="multiple-headings" class="accordion">' +
		 '<div class="-heading">' + 'First Accordion Heading' + '</div>' +
		 '<div class="-content" aria-hidden="true"><p>First Accordion Content</p></div>' +
		 '<div class="-heading">Second Accordion Heading</div>' +
		 '<div class="-content" aria-hidden="true"><p>Second Hidden Accordion Content</p></div>' +
		 '</div>', ['multiple-headings']);

		return this.harness.run(function() {
			this.click("#multiple-headings .-heading");
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root).length).to.equal(1);
				expect($(".accordion .-content.-open", root).length).to.equal(1);
				expect($(".accordion .-heading.-open", root).text()).to.equal('First Accordion Heading');
				expect($(".accordion .-content.-open", root).text()).to.equal('First Accordion Content');
			});
		});
	});


	it('conceals content for direct adjacent sibling when heading is clicked', function() {
	this.harness = createTestHarnessWith('<div id="multiple-open-headings" class="accordion">' +
		 '<div class="-heading -open">' + 'First Open Heading' + '</div>' +
		 '<div class="-content -open"><p>First Accordion Content</p></div>' +
		 '<div class="-heading -open">Second Open Heading</div>' +
		 '<div class="-content -open"><p>Second Open Accordion Content</p></div>' +
		 '</div>', ['multiple-open-headings']);

		return this.harness.run(function() {
			this.click("#multiple-open-headings .-heading");
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root).length).to.equal(1);
				expect($(".accordion .-content.-open", root).length).to.equal(1);
				expect($(".accordion .-heading.-open", root).text()).to.equal('Second Open Heading');
				expect($(".accordion .-content.-open", root).text()).to.equal('Second Open Accordion Content');
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
						accordion($("#" + selector, root));
					});
				},
				stop: function() {}
			}
		}, {
			noRoutes: true
		});
	}
});

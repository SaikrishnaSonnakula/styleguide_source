import accordion from 'lib/modern/scripts/accordion';
import Harness from './support/harness';
import _ from 'underscore';
import $ from 'jquery';

describe('accordion component', function() {
	describe('when closed', function(){

	beforeEach(function() {
	this.harness = createTestHarnessWith('<div id="closed-accordion" class="accordion">' +
										 '<div class="-heading">' + 'Default Accordion Heading' + '</div>' + '<div class="-content" aria-hidden="true">' + '<p>Hidden Accordion Content</p>' + '</div>', ['closed-accordion']);
	});

	afterEach(function() {
		this.harness.stop();
	});

	it('should default to closed', function() {
		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root)).to.not.exist;
				expect($(".accordion .-content.-open", root)).to.not.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.equal('true');
			});
		});
	});

	it('should open when clicked', function() {
		return this.harness.run(function() {
			this.click("#closed-accordion");
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root)).to.exist;
				expect($(".accordion .-content.-open", root)).to.exist;
				expect($(".accordion .-content", root).attr('aria-hidden')).to.not.exist;
			});
		});
	});

	});

	describe('when open', function(){

	beforeEach(function() {
	this.harness = createTestHarnessWith('<div id="open-accordion" class="accordion">' +
										 '<div class="-heading -open">' +
										 'Open Accordion Heading' + '</div>' +
										 '<div class="-content -open">' +
										 '<p>Accordion Content</p>' + '</div>',
	['open-accordion']);
	});

	afterEach(function() {
		this.harness.stop();
	});

	it('should close when click', function() {
		return this.harness.run(function() {
			this.click("#open-accordion");
			this.verify(function(root) {
				expect($(".accordion .-heading.-open", root)).to.not.exist;
				expect($(".accordion .-content.-open", root)).to.not.exist;
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

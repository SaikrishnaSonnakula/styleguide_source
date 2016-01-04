import fancySelect from 'lib/modern/scripts/fancy_select';
import Harness from './support/harness';
import _ from 'underscore';
import $ from 'jquery';

describe('fancy-select component', function() {
	afterEach(function() {
		this.harness.stop();
	});

	it('should default to selected option', function() {
		this.harness = createTestHarnessWith(
			"<select id='my-select'><option value='A' selected='true'>Apple</option><option value='B'>Banana</option></select>"
		);

		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".fancy-select button.-value", root)).to.exist;
				expect($(".fancy-select button.-option.-active", root)).to.contain("Apple");
				expect($(".fancy-select .-value", root)).to.contain("Apple");
			});
		});
	});

	it('appends label to selected value', function() {
		this.harness = createTestHarnessWith(
			"<label for='my-select'>Select:</label><select id='my-select'><option value='A' selected='true'>Apple</option><option value='B'>Banana</option></select>"
		);

		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".fancy-select button.-value", root)).to.exist;
				expect($(".fancy-select button.-option.-active", root)).to.contain("Apple");
				expect($(".fancy-select .-value", root)).to.contain("Select: Apple");
			});

			this.click(".fancy-select button.-option:eq(1)");
			this.verify(function(root) {
				expect($(".fancy-select .-value", root)).to.contain("Select: Banana");
			});
		});
	});

	it('appends correct label to the select', function() {
		this.harness = createTestHarnessWith(
			"<label for='my-select'>Select:</label><select id='my-select'><option value='A' selected='true'>Apple</option><option value='B'>Banana</option></select><label for='choose-select'>Choose:</label><select id='choose-select'><option value='h' selected='true'>Hello</option><option value='y'>Bye</option></select>", ['my-select', 'choose-select']
		);

		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".fancy-select", root).length).to.equal(2);
				expect($(".fancy-select .-value", root)).to.contain("Select: Apple");
				expect($(".fancy-select .-value", root)).to.contain("Choose: Hello");
				expect($("#my-select~.-options button", root).length).to.equal(2);
				expect($("#choose-select~.-options button", root).length).to.equal(2);
			});
		});
	});


	it("should open and close when clicked", function() {
		this.harness = createTestHarnessWith(
			"<select id='my-select'><option selected='true'>A</option><option>B</option></select>"
		);

		return this.harness.run(function() {
			this.click(".fancy-select button.-value");
			this.verify(function(root) {
				expect($(".fancy-select.-open", root)).to.exist;
			});

			this.click(".fancy-select button.-value");
			this.verify(function(root) {
				expect($(".fancy-select.-open", root)).to.not.exist;
			});
		});
	});

	it('should display options in order', function() {
		this.harness = createTestHarnessWith(
			"<select id='my-select'><option selected='true'>A</option><option>B</option></select>"
		);

		return this.harness.run(function() {
			this.verify(function(root) {
				expect($(".fancy-select button.-option:eq(0)", root)).to.contain("A");
				expect($(".fancy-select button.-option:eq(1)", root)).to.contain("B");
			});
		});
	});

	it("should set the value of the select to clicked option", function() {
		this.harness = createTestHarnessWith(
			"<select id='my-select'><option value='A' selected='true'>Apple</option><option value='B'>Banana</option></select>"
		);

		return this.harness.run(function() {
			this.click(".fancy-select button.-value");
			this.click(".fancy-select button.-option:eq(1)");

			this.verify(function(root) {
				expect($(".fancy-select.-open", root)).to.not.exist;
				expect($(".fancy-select button.-value", root)).to.contain("Banana");
				expect($(".fancy-select button.-option.-active", root)).to.contain("Banana");
				expect($("select", root).val()).to.equal("B");
			});
		});
	});

	it('should deactivate non-selected option', function() {
		this.harness = createTestHarnessWith(
			"<select id='my-select'><option value='A' selected='true'>Apple</option><option value='B'>Banana</option></select>"
		);

		return this.harness.run(function() {
			this.click(".fancy-select button.-value");
			this.click(".fancy-select button.-option:eq(0)");
			this.click(".fancy-select button.-value");
			this.click(".fancy-select button.-option:eq(1)");

			this.verify(function(root) {
				expect($('.fancy-select button.-option:eq(0)', root)).to.not.have.class('-active');
				expect($('.fancy-select button.-option:eq(1)', root)).to.have.class('-active');
			});
		});
	});

	function createTestHarnessWith(markup, ids) {
		var selectors = ids || ['my-select'];
		return new Harness(function(root) {
			return {
				start: function() {
					root.append(markup);
					_.each(selectors, function(selector) {
						fancySelect($("#" + selector, root));
					});
				},
				stop: function() {}
			}
		}, {
			noRoutes: true
		});
	}
});
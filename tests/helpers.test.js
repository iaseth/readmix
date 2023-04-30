const readmix = require("../dist");
const { helpers } = readmix;



test("isComment", () => {
	expect(helpers.isComment({text: "// Comment"})).toBe(true);
	expect(helpers.isComment({text: "  // Comment"})).toBe(true);
	expect(helpers.isComment({text: "\t// Comment"})).toBe(true);

	expect(helpers.isComment({text: ":: Comment"})).toBe(true);
	expect(helpers.isComment({text: "  :: Comment"})).toBe(true);
	expect(helpers.isComment({text: "\t:: Comment"})).toBe(true);

	expect(helpers.isComment({text: "  "})).toBe(false);
	expect(helpers.isComment({text: "\t"})).toBe(false);
	expect(helpers.isComment({text: "$"})).toBe(false);
	expect(helpers.isComment({text: "Foo"})).toBe(false);
});



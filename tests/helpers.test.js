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

test("isNotAComment", () => {
	expect(helpers.isNotAComment({text: "// Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "  // Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "\t// Comment"})).toBe(false);

	expect(helpers.isNotAComment({text: ":: Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "  :: Comment"})).toBe(false);
	expect(helpers.isNotAComment({text: "\t:: Comment"})).toBe(false);

	expect(helpers.isNotAComment({text: "  "})).toBe(true);
	expect(helpers.isNotAComment({text: "\t"})).toBe(true);
	expect(helpers.isNotAComment({text: "$"})).toBe(true);
	expect(helpers.isNotAComment({text: "Foo"})).toBe(true);
});

test("isSugar", () => {
	expect(helpers.isSugar({text: "// Comment"})).toBe(false);
	expect(helpers.isSugar({text: "  // Comment"})).toBe(false);
	expect(helpers.isSugar({text: "\t// Comment"})).toBe(false);

	expect(helpers.isSugar({text: ":: Comment"})).toBe(false);
	expect(helpers.isSugar({text: "  :: Comment"})).toBe(false);
	expect(helpers.isSugar({text: "\t:: Comment"})).toBe(false);

	expect(helpers.isSugar({text: " $ Foo"})).toBe(true);
	expect(helpers.isSugar({text: " => Foo"})).toBe(true);
	expect(helpers.isSugar({text: " -> Foo"})).toBe(true);
});


